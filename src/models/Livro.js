import { Schema, model } from "mongoose";

const LivroSchema = new Schema(
  {
    titulo: {
      type: String,
      required: true,
    },
    autor: {
      type: String,
      required: true,
    },
    preco_de_custo: {
      type: Number,
      required: true,
    },
    quantidade: {
      type: Number,
      required: true,
    },
    editora: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Editora",
    },
  },
  {
    timestamps: true,
  }
);

export default model("Livro", LivroSchema);
