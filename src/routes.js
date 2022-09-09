import { Router } from "express";
// Controllers
import UserController from "./controllers/UserController";
// Middlewares
import checkCredentials from "./middlewares/checkCredentials";

const routes = new Router();

routes.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

routes.post("/login", UserController.login);
routes.use(checkCredentials);
routes.post("/register", UserController.create);

export default routes;
