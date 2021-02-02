import _ from "the-lodash";
import { Context } from "../context";
import { Router } from "@kubevious/helper-backend";

module.exports = {
  url: "/api/v1/support",

  setup: ({
    router,
    logger,
    context,
  }: {
    router: Router;
    logger?: any; //ILogger
    context: Context;
  }) => {
    router.get("/notifications", function (req, res) {
      return context.notificationsApp.notificationItems;
    });
  },
};
