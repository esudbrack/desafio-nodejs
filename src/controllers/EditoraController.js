import Editora from "../models/Editora";

class EditoraController {
  async create(req, res) {
    try {
      let { nome, cnpj } = req.body;

      let editora = await Editora.create({ nome, cnpj, livros: [] });

      return res.send(editora);
    } catch (error) {
      return res.status(500).send({ message: "Internal server error." });
    }
  }

  async list(req, res) {
    try {
    } catch (error) {
      return res.status(500).send({ message: "Internal server error." });
    }
  }

  async update(req, res) {
    let { id } = req.params;

    try {
    } catch (error) {
      return res.status(500).send({ message: "Internal server error." });
    }
  }

  async delete(req, res) {
    let { id } = req.params;

    try {
    } catch (error) {
      return res.status(500).send({ message: "Internal server error." });
    }
  }
}

export default new EditoraController();
