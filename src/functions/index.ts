import { app, HttpMethod } from "@azure/functions";
import {
  fetchAll,
  fetchById,
  update,
  create,
  deleteById
} from "../handlers/handler-boilerplate";

const routes = [
  {
    path: "record",
    methods: ["GET"],
    handler: fetchById,
    name: "fetchRecord",
  },
  {
    path: "records",
    methods: ["GET"],
    handler: fetchAll,
    name: "fetchRecords",
  },
  {
    path: "record",
    methods: ["PUT"],
    handler: update,
    name: "updateRecord",
  },
  {
    path: "record",
    methods: ["POST"],
    handler: create,
    name: "createRecord",
  },
  {
    path: "delete",
    methods: ["DELETE"],
    handler: deleteById,
    name: "deleteRecord",
  }
];

routes.forEach((route) => {
  app.http(route.name, {
    methods: route.methods as HttpMethod[],
    authLevel: "anonymous",
    handler: route.handler,
    route: route.path,
  });
});
