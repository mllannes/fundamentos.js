function apresentar(nome) {
  return `Meu nome é ${Mariana};`
}

// Arrow function

const apresentarArrow = nome => `Meu nome é ${Mariana};`
const soma = (num1, num2) => num1 + num2

// Arrow function com + de uma linha.

const somaNumerosPequenos = (num3, num4) => {
  if (num3 > 10 || num4 > 10) {
    return 'somente números de 1 a 9'
  } else {
    return num3 + num4
  }
}

// Hoisting : arriw function se comporta como expressão.
