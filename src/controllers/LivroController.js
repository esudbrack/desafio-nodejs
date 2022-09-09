import Editora from "../models/Editora";
import Livro from "../models/Livro";

class LivroController {
  async create(req, res) {
    try {
      let { titulo, autor, preco_de_custo, quantidade, editora } = req.body;
      editora = await Editora.findById(editora);

      if (!editora) {
        return res.status(400).send({ message: "Editora não encontrada" });
      }

      let livro = await Livro.create({
        titulo,
        autor,
        preco_de_custo,
        quantidade,
        editora,
      });

      editora.livros.push(livro);
      await editora.save();

      return res.send(livro);
    } catch (error) {
      return res.status(500).send({ message: "Internal server error." });
    }
  }

  async list(req, res) {
    try {
        let livros = await Livro.find().sort({'titulo': 1}).select(['-preco_de_custo']);

        res.send({ livros });
    } catch (error) {
      return res.status(500).send({ message: "Internal server error." });
    }
  }

  async listByEditora(req, res) {
    try {
        let livros = await Livro.find({ editora: req.params.id }).sort({'titulo': 1}).select(['-preco_de_custo']);

        res.send({ livros });
    } catch (error) {
      return res.status(500).send({ message: "Internal server error." });
    }
  }

  async update(req, res) {
    let { id } = req.params;
    let { titulo, autor, preco_de_custo, quantidade } = req.body;
    
    try {
        let livro = await Livro.findById(id);

        livro.titulo = titulo;
        livro.autor = autor;
        livro.preco_de_custo = preco_de_custo;
        livro.quantidade = quantidade;
        
        await livro.save();

        return res.send({ message: "Livro atualizado com sucesso."})
    } catch (error) {
      return res.status(500).send({ message: "Internal server error." });
    }
  }

  async delete(req, res) {
    let { id } = req.params;
    
    try {
        let livro = await Livro.findById(id);
        let editoraId = livro.editora;
        
        // await Livro.findByIdAndRemove(id).exec();

        // REMOVER LIVRO DO ARRAY DE LIVROS DA EDITORA
        let editora = await Editora.findById(editoraId);

        console.log(editora.livros);

        return res.send({ message: "Livro deletado com sucesso."});
    } catch (error) {
      return res.status(500).send({ message: "Internal server error." });
    }
  }
}

export default new LivroController();
