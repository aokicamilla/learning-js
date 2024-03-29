// 1 - Crie um objeto chamado pessoa que represente informações sobre uma pessoa. O objeto deve ter as seguintes propriedades: nome e notas. Adicione um método chamado calcularMediaNotas ao objeto pessoa. Este método deve calcular a média das notas da pessoa.

// Adicione um método chamado classificarDesempenho ao objeto pessoa. Este método deve retornar uma categoria de desempenho com base na média calculada. Utilize as seguintes categorias:

// Desempenho excelente: média >= 9
// Bom desempenho: 7.5 <= média entre 7.6 e 8.9
// Desempenho regular: 6 <= média entre 6 e 7.5
// Desempenho insuficiente: média < 6
const pessoa = {
    nome: 'Maria',
    notas: [9,8,9,10],
    calcularMediaNotas: function(array) {
        const soma = array.reduce((total,nota) => total + nota)
        return soma/array.length
    },
    classificarDesempeho: function(media) {
        if (media >= 9) {
            return 'Desempenho excelente'
        } else if (media >= 7.6 && media <= 8.9) {
            return 'Bom desempenho'
        } else if (media >= 6 && media <= 7.5) {
            return 'Desempenho regular'
        } else {
            return 'desempenho insuficiente'
        }
    }
}
// Chame o método calcularMediaNotas para calcular a média das notas da pessoa e imprima no console a média calculada.
const media = pessoa.calcularMediaNotas(pessoa.notas)
console.log(`A média das notas é: ${media}`)

// Chame o método classificarDesempenho e imprima no console a categoria de desempenho da pessoa.
console.log(`Classificação: ${pessoa.classificarDesempeho(media)}`)

// 2 - Crie um objeto chamado carro que represente as informações de um veículo. O objeto deve ter as seguintes propriedades:

// marca (string): marca do carro.
// modelo (string): modelo do carro.
// ano (number): ano de fabricação do carro.
// cor (string): cor do carro.
// Utilize o loop for...in para percorrer todas as propriedades do objeto carro e imprima no console o nome da propriedade e o seu valor.
const carro = {
    marca: 'fiat',
    modelo: 'palio',
    ano: 1998,
    cor: 'amarelo',
}

//defineProperty, nome do objeto e chave, depois dentro pode colocar o valor e se é enumerável
Object.defineProperty(carro, 'placa', {
    value: 'FDS-1234',
    enumerable: false
})

for (let chave in carro) {
    console.log(`${chave} : ${carro[chave]}`)
}

const valor = Object.entries(carro)
console.log(valor)

// Adicione mais propriedades ao objeto carro para representar características adicionais do veículo.
carro.portas = 4
console.log(carro)

// Utilize novamente o loop for...in para percorrer todas as propriedades atualizadas do objeto carro e imprima no console o nome da propriedade e o seu valor.

// 3 - Crie um arquivo chamado metodosObjeto.js para realizar este exercício.

// Utilize o objeto carro do exercício 2 com as propriedades iniciais (marca, modelo, ano, cor) e adicione:

// ligado: uma propriedade do tipo booleana que indica se o carro está ligado ou não.
// ligar: um método que imprime no console uma mensagem indicando que o carro está ligado.
// desligar: um método que imprime no console uma mensagem indicando que o carro está desligado. Observação: se o carro já está ligado (ligado = true), não pode ser ligado novamente e vice-versa.
// obterDetalhes: um método que retorna uma string contendo todos os detalhes do carro (marca, modelo, ano, cor, estado de ligado/desligado).
// Em seguida, faça o seguinte:

// Chame os métodos ligar e desligar do objeto carro e imprima no console as mensagens resultantes.
// Chame o método obterDetalhes e imprima no console a string retornada.


// 4 - No objeto carro, adicione uma nova propriedade chamada placa representando a placa do veículo. Defina a propriedade placa como não enumerável, para que ela não seja listada ao percorrer as propriedades do objeto.

// Utilize um loop for...in para percorrer as propriedades do objeto carro e imprima no console apenas as propriedades enumeráveis.

// Utilize o método Object.keys() para obter um array contendo apenas as chaves enumeráveis do objeto carro e imprima no console esse array.

// Tente acessar a propriedade placa diretamente usando carro.placa e imprima no console o resultado obtido.

// 5 - Crie um novo objeto chamado carroNovo para representar as informações de um novo carro. O objeto deve ter as seguintes propriedades:

const carroNovo = {
    marca: 'Ford',
    modelo: 'Ka',
    ano: 2010,
    cor: 'vermelho'
}
//mostra uma combinação dos dois carros
const carroComNovosDetalhes = {...carro, ...carroNovo};
console.log('Carro com novos detalhes:')
console.log(carroComNovosDetalhes)

carroComNovosDetalhes.cor = 'amarelo'
console.log('Carro com Detalhes modificados')
console.log(carroComNovosDetalhes)

// marca (string): marca do novo carro.
// modelo (string): modelo do novo carro.
// ano (number): ano de fabricação do novo carro.
// cor (string): cor do novo carro.
// Utilize o operador de espalhamento (...) para criar um novo objeto chamado carroComNovosDetalhes que herde todas as propriedades do objeto carro e adicione as propriedades do objeto carroNovo.

// Imprima no console o objeto carroComNovosDetalhes para verificar as informações do carro com os novos detalhes.

// Modifique o valor de uma propriedade no objeto carroComNovosDetalhes e imprima novamente o objeto no console para confirmar as alterações.