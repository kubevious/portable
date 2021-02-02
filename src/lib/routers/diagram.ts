import _ from "the-lodash";
import { Context } from "../context";
import { Router } from "@kubevious/helper-backend";
import Joi from "joi";
import { SearchQuery } from "../types";

module.exports = {
  url: "/api/v1/diagram",

  setup: ({
    router,
    logger,
    context,
  }: {
    router: Router;
    logger?: any; //ILogger
    context: Context;
  }) => {
    const reportUserError = (message: string) => {
      throw new Error(message);
    };

    router.get("/node", function (req, res) {
      if (!req.query.dn) {
        reportUserError("Missing dn.");
      }
      const dn: string = <string>req.query.dn;
      var state = context.registry.getCurrentState();
      return state.getNode(dn);
    });

    router.get("/children", function (req, res) {
      if (!req.query.dn) {
        reportUserError("Missing dn.");
      }
      const dn: string = <string>req.query.dn;
      var state = context.registry.getCurrentState();
      return state.getChildren(dn);
    });

    router.get("/props", function (req, res) {
      if (!req.query.dn) {
        reportUserError("Missing dn.");
      }
      const dn: string = <string>req.query.dn;
      var state = context.registry.getCurrentState();
      var nodeItem = state.getNodeItem(dn);
      if (!nodeItem) {
        return [];
      }
      return _.values(nodeItem?.propertiesMap);
    });

    router.get("/alerts", function (req, res) {
      const dn: string = <string>req.query.dn;
      var state = context.registry.getCurrentState();
      var nodeItem = state.getNodeItem(dn);
      if (!nodeItem) {
        return [];
      }
      return nodeItem?.hierarchyAlerts;
    });

    /*************************/

    router.post("/search", function (req, res) {
      const criteria: SearchQuery = <SearchQuery>req.body;
      return context.searchEngine.search(criteria);
    });
  },
};
