import { Router } from "@kubevious/helper-backend/dist";
import { Context } from "../context";
import Joi from "joi";

export interface ValueQuery {
  key: string;
  criteria: string;
}

module.exports = {
  url: "/api/v1/search",

  setup: ({
    router,
    logger,
    context,
  }: {
    router: Router;
    logger?: any; //ILogger
    context: Context;
  }) => {
    router.post("/labels", function (req, res) {
      const criteria: string = <string>req.body.criteria;
      return context.autocompleteBuilder.getLabels(criteria);
    });

    router.post("/labels/values", function (req, res) {
      const query: ValueQuery = <ValueQuery>req.body;
      return context.autocompleteBuilder.getLabelValues(
        query.key,
        query.criteria
      );
    });

    router.post("/annotations", function (req, res) {
      const criteria: string = <string>req.body.criteria;
      return context.autocompleteBuilder.getAnnotations(criteria);
    });

    router.post("/annotations/values", function (req, res) {
      const query: ValueQuery = <ValueQuery>req.body;
      return context.autocompleteBuilder.getAnnotationValues(
        query.key,
        query.criteria
      );
    });
  },
};
