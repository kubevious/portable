import _ from "the-lodash";
import { Context } from "../context";
import { Router } from "@kubevious/helper-backend";

export default function (router: Router, context: Context) {
  const reportUserError = (message: string) => {
    throw new Error(message);
  };

  router.url("/api/clusters");

  router.get("/notifications", function (req, res) {
    return context.notificationsApp.notificationItems;
  });

  router.get("/", function (req, res) {
    return context.clusterEngine.fetchList();
  });

  router.get("/info/:name", function (req, res) {
    return context.clusterEngine.fetchDetails(req.params.name);
  });

  router.get("/active", function (req, res) {
    return context.clusterEngine.getActiveCluster();
  });

  router.post("/active", function (req, res) {
    if (!req.body.name) {
      reportUserError("Missing name.");
    }
    return context.clusterEngine.setActiveCluster(req.body.name);
  });

  router.post("/create-config", function (req, res) {
    if (!req.body.config) {
      reportUserError("Missing config");
    }

    return context.clusterEngine.createConfig(req.body);
  });
}
