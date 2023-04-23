import ProductModel from '../product/product.schema'
import StockModel from './stock.schema'
import { ProductType } from '../product/product.types'

export class StockService {
/*********************************************************************************************************************************************/
    async criarEstoque() {
        const produtosList: ProductType[] = await ProductModel.find()
        const estoque = produtosList.map((item: ProductType) => {
            let produtoComEstoque = {
                nome: item.nome,
                quantidade: item.quantidade,
                valor: item.valor,
                stockValue: Number(item.quantidade) * Number(item.valor)
            }
            return produtoComEstoque
        })

        const salvarEstoque = await StockModel.insertMany(estoque)
        return salvarEstoque 
    }
/*********************************************************************************************************************************************/
    async sortProdutos() {
        const dezProdutos = await ProductModel.find().limit(10)

        let indexSortiados: Number[] = []
        let numeroAleatorio: Number
        while (indexSortiados.length < 4) {
            numeroAleatorio = Math.floor(Math.random() * dezProdutos.length) // Gera um numero aleatório entre 0 e 9
            if (indexSortiados.length === 0) {
                indexSortiados.push(numeroAleatorio)
            }
            let flag = true
            indexSortiados.forEach((numero) => {
                if (numero === numeroAleatorio) {
                    flag = false
                }
            })
            if (flag) {
                indexSortiados.push(numeroAleatorio)
            }
        }
        
        let quatroProdutos: any[] = []
        
        let i = 0
        while (quatroProdutos.length < indexSortiados.length) {
            let index = indexSortiados[i].valueOf()
            quatroProdutos[i] = dezProdutos[index]
            i++
        }

        return quatroProdutos
    }
/*********************************************************************************************************************************************/
    async calcularTotalEstoque() {
        const produtosList = await StockModel.find()

        const valorEstoque = produtosList.reduce((soma, valorAtual) => {
            return soma + valorAtual.stockValue!
        }, 0)

        return valorEstoque
    }
/*********************************************************************************************************************************************/
    async escreverArquivoProduto() {
        const produtoList = await ProductModel.find()
        try {
            const fs = require('fs/promises');
            fs.writeFile('produtos.json', JSON.stringify(produtoList, null, 2))
            return "Arquivo Gerado com sucesso!!!"
        } catch (error) {
            return "Falha: Arquivo NÃO foi gerado!!!"
        }
    }
/*********************************************************************************************************************************************/
    async lerArquivoProduto() {
        try{
            const fs = require('fs/promises');
            const minhaLista = fs.readFile('produtos.json', "utf-8")
            return minhaLista
        } catch (error) {
            return "Falha: Arquivo NÃO foi encontrado!!!"
        }

    }
/*********************************************************************************************************************************************/

}