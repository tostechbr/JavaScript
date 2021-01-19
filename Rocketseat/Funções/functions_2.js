// function expression
// function anonymous 

// Ex 1 parâmetro (parameters)
const sum = function(number1, number2){
    console.log(number1 + number2)
}

sum(2,3) // arguments - argumentos

// Ex 2 parâmetro (parameters)
const sum = function(number1, number2){
    total = number1 + number2
    return total
}

let number1 = 34
let number2 = 25

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sub(number1, number2)}`)

// Ex 3 parâmetro (parameters) - usando o total 
const sum = function(number1, number2){
    total = number1 + number2
    return total
}

let number1 = 34
let number2 = 25

console.log(`a soma é ${sub(number1, number2)}`)
console.log(total)
