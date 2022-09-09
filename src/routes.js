import { Router } from "express";
import UserController from "./controllers/UserController";

const routes = new Router();

routes.get("/", (req, res) => {
  return res.send({ message: "oi" });
});

routes.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

routes.post("/register", UserController.create);

export default routes;
