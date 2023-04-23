import ProductModel from './product.schema'
import {ProductType} from './product.types'

export class ProductService {

    async CrearProduto(produto: ProductType) {
        return await ProductModel.create(produto)
    }

    async listarTodosProdutos() {
        return await ProductModel.find()
    }

    async produtoPorId(id: any) {
        const produtoPorID = await ProductModel.findById(id)
        return produtoPorID
    }

    async buscarProdutoPorNome(nomeParametro: any) {
        const buscarPorNome = await ProductModel.find({
            nome: nomeParametro
        })
        return buscarPorNome
    }

    async atualizarProduto(id: any, dataBody:ProductType) {
        const produtoAtualizado = await ProductModel.findOneAndUpdate({_id: id}, 
            {
                nome: dataBody.nome,
                quantidade: dataBody.quantidade,
                valor: dataBody.valor
            }, {new: true})

        return produtoAtualizado
    }

    async deletarProduto(idParametro: any) {
        await ProductModel.findOneAndDelete({_id: idParametro})
    }
    
}