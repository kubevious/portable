import _ from "the-lodash";
import { Context } from "../context";
import { Router } from "@kubevious/helper-backend";

export default function (router: Router, context: Context) {
  router.url("/api/v1/support");

  router.get("/notifications", function (req, res) {
    return context.notificationsApp.notificationItems;
  });
}
