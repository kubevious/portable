import _ from "the-lodash";
import { ILogger } from "the-logger";

import { Context } from "../context";
import { SearchResults } from "./results";

import { Index as FlexSearchIndex } from "flexsearch";
import FlexSearch from "flexsearch";

import { prettyKind as helperPrettyKind } from "@kubevious/helpers/dist/docs";
import { SearchQuery, AlertsPayload } from "../types";
import { RegistryBundleState } from "@kubevious/helpers/dist/registry-bundle-state";
import { RegistryBundleNode } from "@kubevious/helpers/dist/registry-bundle-node";
import { AlertCounter } from "@kubevious/helpers/dist/snapshot/types";

export class SearchEngine {
  private _logger: ILogger;
  private _index?: FlexSearchIndex<any>;
  private _rawItems: RegistryBundleNode[] = [];

  constructor(context: Context) {
    this._logger = context.logger.sublogger("SearchEngine");

    this._reset();
  }

  get logger() {
    return this._logger;
  }

  accept(state: RegistryBundleState) {
    // TODO: make this nicer.
    this._rawItems = state.nodeItems.filter(
      (x) => x.dn !== "root" && x.dn !== "summary"
    );

    this._reset();
    for (var node of this._rawItems) {
      this._addSnapshotItemToIndex(node);
    }
  }

  private _reset() {
    this._index = FlexSearch.create<any>({
      encode: "icase",
      tokenize: "full",
      threshold: 1,
      resolution: 3,
      depth: 2,
    });
  }

  private _addSnapshotItemToIndex(node: RegistryBundleNode) {
    var doc: string[] | string = [node.dn];
    var prettyKind = helperPrettyKind(node.config.kind);
    doc.push(prettyKind);
    doc = doc.join(" ");
    this._index!.add(node.dn as any, doc);
  }

  private _searchByKeyword(criteria: string, search: SearchResults) {
    if (criteria.length <= 1) {
      return;
    }

    const results = this._index!.search(criteria);
    this.logger.silly("SEARCH: %s, result: ", criteria, results);
    if (Array.isArray(results)) {
      const resultDict = _.makeDict(
        results,
        (x) => <string>x,
        (x) => true
      );
      search.filterResults((item) => {
        return resultDict[item.dn];
      });
    }
  }

  private _filterByKind(value: string, search: SearchResults) {
    search.filterResults((item) => {
      return item.kind === value;
    });
  }

  private _filterByAlerts(
    severity: keyof AlertCounter,
    value: AlertsPayload,
    search: SearchResults
  ) {
    search.filterResults((item) => {
      const currentValue = <number>item.alertCount[severity];
      if (value.kind === "at-least") {
        return currentValue >= value.count;
      }
      if (value.kind === "at-most") {
        return currentValue <= value.count;
      }
      return true;
    });
  }

  private _filterByLabels(
    value: { [name: string]: string }[],
    search: SearchResults
  ) {
    search.filterResults((item) => {
      return value.every((filterCriteria) => {
        const { key, value } = filterCriteria;
        if (_.isNotNullOrUndefined(item.labels)) {
          return item.labels![key] === value;
        }
      });
    });
  }

  private _filterByAnnotations(
    value: { [name: string]: string }[],
    search: SearchResults
  ) {
    search.filterResults((item) => {
      return value.every((filterCriteria) => {
        const { key, value } = filterCriteria;
        if (_.isNotNullOrUndefined(item.annotations)) {
          return item.annotations[key] === value;
        }
      });
    });
  }

  search(query: SearchQuery) {
    const search = new SearchResults(this._rawItems);

    if (_.isNotNullOrUndefined(query.kind)) {
      this._filterByKind(query.kind!, search);
    }

    if (_.isNotNullOrUndefined(query.labels)) {
      this._filterByLabels(query.labels!, search);
    }
    if (_.isNotNullOrUndefined(query.annotations)) {
      this._filterByAnnotations(query.annotations!, search);
    }

    if (_.isNotNullOrUndefined(query.error)) {
      this._filterByAlerts("error", query.error!, search);
    }

    if (_.isNotNullOrUndefined(query.warn)) {
      this._filterByAlerts("warn", query.warn!, search);
    }

    if (_.isNotNullOrUndefined(query.criteria)) {
      this._searchByKeyword(query.criteria!, search);
    }

    if (!search.wasFiltered) {
      return {
        totalCount: 0,
        results: [],
      };
    }

    // TODO: Cleanup after done. this is for testing purposes.
    // let resultsArray : any[] = [];
    // for(let i = 0; i < 1000; i++) {
    //     resultsArray.push({ dn: 'root/ns-' + i});
    // }

    const resultsArray = search.results;
    let response = {
      totalCount: resultsArray.length,
      results: _.take(resultsArray, 200).map((el) => ({ dn: el.dn })),
      wasFiltered: true,
    };
    return response;
  }
}
