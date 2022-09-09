import { Router } from "express";
// Controllers
import EditoraController from "./controllers/EditoraController";
import LivroController from "./controllers/LivroController";
import UserController from "./controllers/UserController";
// Middlewares
import checkCredentials from "./middlewares/checkCredentials";

const routes = new Router();

routes.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

routes.post("/login", UserController.login);
routes.post("/register", UserController.create);

routes.get("/livros", LivroController.list);
routes.get("/livros/editora/:id", LivroController.listByEditora);

routes.use(checkCredentials);

routes.post("/editora/create", EditoraController.create);

routes.post("/livro/create", LivroController.create);
routes.put("/livro/:id", LivroController.update);
routes.delete("/livro/:id", LivroController.delete);

export default routes;
