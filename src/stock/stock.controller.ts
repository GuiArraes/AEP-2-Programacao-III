import {Request, Response} from 'express'
import {StockService} from './stock.service'

class StockController {

    async adicionarStock(req: Request, res: Response) {
        const stock = await new StockService().criarEstoque()
        return res.status(200).json(stock)
    }

    async sortearProduto(req: Request, res: Response) {
        const produtos = await new StockService().sortProdutos()
        return res.status(200).json(produtos)
    }

    async calcularTotalEstoque(req: Request, res: Response) {
        const total = await new StockService().calcularTotalEstoque()
        return res.status(200).json(total)
    }

    async escreverArquivoProduto(req: Request, res: Response) {
        const resposta = await new StockService().escreverArquivoProduto()
        return res.status(200).json(resposta)
    }

    async lerArquivoProduto(req: Request, res: Response) {
        const resposta = await new StockService().lerArquivoProduto()
        return res.status(200).json(resposta)
    }
}

export default new StockController()