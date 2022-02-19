// Crie uma função para verificar se um valor é Truthy
function  isTruthy(number){
    
    return !!number
}

isTruthy('')

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function quadrado(lados){
    let perimetro =  lados * 4;
    return perimetro; 
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function pessoa(nome, sobrenome){
    let dados = nome + " " + sobrenome;
    return dados; 
}

// Crie uma função que verifica se um número é par

function isEvenOrOdd(number){
    if(number % 2 == 0){
        console.log('É par');
    }else {
        console.log('É ímpar');
    }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function dado(whatType){
    return (typeof whatType)
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', () => {
    console.log('Caio Moraes');
})

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

precisoVisitar(20);
  