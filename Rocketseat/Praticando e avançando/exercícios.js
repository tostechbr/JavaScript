// 1. Declare uma variável de nome weight
var weight;

// 2. Que tipo de dado é a variável acima?
console.log(typeof weight)

/*
3. Declare uma variável e atribua valores para cada um dos dados:
    *name: String
    *age: Number (integer)
    *stars: Number (float)
    *isSubscribed: Boolean
*/
let name = "Tiago"
let age = 23
let stars = 10.3
let isSubscribed = false

/* 
4. A variável student abaixo é de que tipo de dados?

4.1 Atribua a ela as mesmas prorpriedades e valores do exercício 3.

4.2 Mostre no console a seguinte mensagem:

    <name> de idade <age> pesa <weight> kg.

    Atenção, substiua <name> <age> e <weight> pelos valores de cada propriedades do objeto
*/

let student = {
    name: "Tiago",
    age: 23,
    weight: 70.4,
    isSubscribed: false,
}; //Object

// 4. 
console.log(typeof student) // descobrir que tipo de dados

// 4.2
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

// 5. Crie um novo student e coloque na posição 1 do Array students

const john = {
    name:"John", 
    age: 23,
    weight: 100.2,
    isSubscribed: true,
}
students[1] = John // colocando John na posição 1

