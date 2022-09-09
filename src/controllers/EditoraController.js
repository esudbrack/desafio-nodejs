import Editora from "../models/Editora";
import Livro from "../models/Livro";

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
      let editoras = await Editora.find().sort({ nome: 1 }).populate("livros");

      res.send({ editoras });
    } catch (error) {
      return res.status(500).send({ message: "Internal server error." });
    }
  }

  async update(req, res) {
    let { id } = req.params;
    let { nome, cnpj } = req.body;

    try {
      let editora = await Editora.findById(id);

      editora.nome = nome;
      editora.cnpj = cnpj;

      await editora.save();

      return res.send({ message: "Editora atualizado com sucesso." });
    } catch (error) {
      return res.status(500).send({ message: "Internal server error." });
    }
  }

  async delete(req, res) {
    let { id } = req.params;

    try {
      await Editora.findByIdAndRemove(id).exec();

      // remove todos os livros da editora
      await Livro.deleteMany({ editora: id });

      return res.send({ message: "Editora deletada com sucesso." });
    } catch (error) {
      return res.status(500).send({ message: "Internal server error." });
    }
  }
}

export default new EditoraController();
