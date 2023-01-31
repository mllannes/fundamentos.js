// parâmetros de função

function soma(numero1, numero2) {
  return numero1 + numero2
}

console.log(soma(2, 2))
console.log(soma(4, 2))

// ordem de parâmetro

function nomeIdade(nome, idade) {
  return `Meu nome é ${nome}, e minha idade ${idade}`
}

console.log(nomeIdade(29, 'Mariana'))

function soma(numero3, numero4) {
  return numero3 + numero4
}

function multiplica(numero3 = 1, numero4 = 1) {
  return numero3 * numero4
}

console.log(multiplica(soma(4, 5)))

function cumprimentar() {
  return 'Oi gente!'
}

function cumprimentaPessoa(nomePessoa) {
  console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}

cumprimentaPessoa('Mariana') // “Oi gente! Meu nome é Mariana

function operacao(num1, num2, num3, num4) {
  return num1 + (num2 * num3) / num4
}

console.log(operacao(2, 4, 6, 8))

//comParametro

function comParametro(param) {
  console.log(param)
}
comParametro()

// Como nenhum parâmetro foi passado, a saída do console é "undefined"
