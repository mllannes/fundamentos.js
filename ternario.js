const idadeMinima = 18
const idadeCliente = 16

// Boa prática usar o if

// if (idadeCliente >= idadeMinima) {
//   console.log('Pode beber!')
// } else {
// console.log('Não pode beber!')
// }

//condição                                     //true          //false

console.log(idadeCliente >= idadeMinima ? 'Pode beber!' : 'Não pode beber!')

const nome = 'Mariana'
const idade = 29
const bebidaMaior = 'cerveja'
const bebidaMenor = 'suco'

const pedido = `${nome} diz: "por favor, quero beber ${
  idade >= 18 ? bebidaMaior : bebidaMenor
}"`

console.log(pedido)
