import {model, Schema} from "mongoose";

const ProductSchema = new Schema({
    nome: {require: true, type: String}, // Este campo é obrigatorio (require) do tipo String
    quantidade: {type: Number}, // Esse campo não é obrigatório do tipo Number
    valor: {type: Number} // Esse campo não é obrigatório do tipo Number
}, {
    timestamps: true // Parametro que irá gerar log para auditorias
   }
)

export default model('Product', ProductSchema)