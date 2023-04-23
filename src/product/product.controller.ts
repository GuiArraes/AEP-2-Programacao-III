import {Request, Response} from 'express'
import {ProductService} from './product.service'

class ProductController {

    async criarProduto(req: Request, res: Response) {
        const product = await new ProductService().CrearProduto(req.body)

        return res.status(200).json(product)
    }

    async listarProdutos(req: Request, res: Response) {
        const productList = await new ProductService().listarTodosProdutos()
        return res.status(200).json(productList)
    }

    async buscarProdutoPeloId(req: Request, res: Response) {
        const product = await new ProductService().produtoPorId(req.params.id)
        return res.status(200).json(product)
    }

    async buscarProdutoPorNome(req: Request, res: Response) {
        const porNome = await new ProductService().buscarProdutoPorNome(req.query.meu_nome)
        return res.status(200).json(porNome)
    }

    async atualizarProduto(req: Request, res: Response) {
        const atualizar = await new ProductService().atualizarProduto(req.params.id, req.body)
        return res.status(200).json(atualizar)
    }

    async deletarProduto(req: Request, res: Response) {
        await new ProductService().deletarProduto(req.params.id)
        return res.status(200).json("Produto deletado com SUCESSO!!!")
    }

}

export default new ProductController()