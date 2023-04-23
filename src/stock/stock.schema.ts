import {model, Schema} from "mongoose"

const StockeSchema = new Schema({
    nome: {require: true, type: String},
    quantidade: {type: Number}, 
    valor: {type: Number},
    stockValue: {type: Number}
}, {
    timestamps: true
   }
)

export default model('ProductStock', StockeSchema)