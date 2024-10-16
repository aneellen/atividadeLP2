// Função para dividir dois números
export function dividir(a,b){
    return a / b;
}


// Importando as funções dos módulos
import {somar} from './somar.mjs';
import {multiplicar} from './multiplicar.mjs';
import {subtrair} from './subtrair.mjs';
import {potencia} from './potencia.mjs';
import {dividir} from './dividir.mjs';
// Utilizando as funções importadas
const numero1 = 5;
const numero2 = 3;
const resultadoSoma = somar(numero1, numero2);
const resultadoMultiplicacao = multiplicar(numero1, numero2);
const resultadoSubtrair = subtrair(numero1, numero2);
const resultadoPotencia = potencia(numero1, numero2);
const resultadoDividir = dividir(numero1, numero2);
console.log(`${numero1} + ${numero2} = ${resultadoSoma}`);
console.log(`${numero1} * ${numero2} = ${resultadoMultiplicacao}`);
console.log(`${numero1} - ${numero2} = ${resultadoSubtrair}`);
console.log(`${numero1} ** ${numero2} = ${resultadoPotencia}`);
console.log(`${numero1} / ${numero2} = ${resultadoDividir.toFixed(2)}`)


// Função para multiplicar dois números
export function multiplicar(a,b){
    return a * b;
}

// Função para potência
export function potencia(a,b){
    return a ** b;
}

// Função para somar dois números
export function somar(a, b){
    return a + b;
}

// Função para subtrair dois números
export function subtrair(a, b){
    return a - b;
}