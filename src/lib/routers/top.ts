import _ from "the-lodash";
import { Context } from "../context";
import { Router } from "@kubevious/helper-backend";
import VERSION from "../../version";

module.exports = {
  url: "/",

  setup: ({
    router,
    logger,
    context,
  }: {
    router: Router;
    logger?: any; //ILogger
    context: Context;
  }) => {
    router.get("/", (req, res) => {
      return {};
    });

    router.get("/api/v1/version", (req, res) => {
      return {
        version: VERSION,
      };
    });
  },
};
