import _ from "the-lodash";
import { Context } from "../context";
import { Router } from "@kubevious/helper-backend";
import Joi from "joi";
import { Body } from "../types";

export default function (router: Router, context: Context) {
    router.url("/api/clusters");

    router.get("/", (req, res) => {
        return context.clusterEngine.fetchList();
    });

    router.get("/info/:name", (req, res) => {
        return context.clusterEngine.fetchDetails(req.params.name);
    })
    .paramsSchema(
        Joi.object({
            name: Joi.string().required(),
        })
    );

    router.get("/active", (req, res) => {
        return context.clusterEngine.getActiveCluster();
    });

    router.post("/active", (req, res) => {
        return context.clusterEngine.setActiveCluster(req.body.name);
    })
    .bodySchema(
        Joi.object({
            name: Joi.string().required(),
        })
    );

    router.get("/create-config", (req, res) => {
        const config = <Body>req.body;

        return context.clusterEngine.createConfig(config);
    })
    .bodySchema(
        Joi.object({
            config: Joi.object({
                config: Joi.string().required(),
                username: Joi.string().required(),
                password: Joi.string().required(),
                remember: Joi.boolean().required(),
                title: Joi.string().required(),
            }).required(),
        })
    );
}
