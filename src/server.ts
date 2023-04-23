import app from './app'

function main() {
    try {
        const porta = 3000
        app.listen(porta, 'localhost',async () => {
            console.log('Servidor inicializado na porta: ', porta)
        })
    } catch (err) {
        console.log('Erro ao inicializar o servidor: ', err)
    }
}

main() // Esse main aqui é super importante, sem ele o seu servidos não é executado