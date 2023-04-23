import { Router } from 'express'
import productController from './product/product.controller'
import stockController from './stock/stock.controller'

const routes = Router()

/**********************************CRUD***************************************/
routes.post('/novo-produto', productController.criarProduto)
routes.get('/lista-produto', productController.listarProdutos)
routes.get('/produto/:id', productController.buscarProdutoPeloId)
routes.get('/produto-nome', productController.buscarProdutoPorNome)
routes.put('/produto/:id', productController.atualizarProduto)
routes.delete('/produto/:id', productController.deletarProduto)
/**********************************EAP****************************************/
routes.get('/set-stock', stockController.adicionarStock)
routes.get('/sort-produto', stockController.sortearProduto)
routes.get('/total-stock', stockController.calcularTotalEstoque)
routes.get('/escrever-produto', stockController.escreverArquivoProduto)
routes.get('/ler-produto', stockController.lerArquivoProduto)

export default routes
