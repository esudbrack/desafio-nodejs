import { Schema, model } from "mongoose";

const EditoraSchema = new Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    cnpj: {
      type: String,
      required: true,
      unique: true,
    },
    livros: [{ type: Schema.Types.ObjectId, ref: "Livro" }],
  },
  {
    timestamps: true,
  }
);

export default model("Editora", EditoraSchema);
