/* 
1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça {

  K = K + 1;
  SOMA = SOMA + K;
}

imprimir(SOMA);

Ao final do processamento, qual será o valor da variável SOMA?
*/

// Transformando o codigo para Javascript//

let indice = 13;
let soma = 0;
let k = 0;

while (k < indice) {
  k = k + 1;
  soma = soma + k;
  console.log(soma);
}

// Ao final do processamento, o valor da variável SOMA é 91.//

/*2)Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código*/

// Linguagem usada Javascript //

function sequenciaFibonacci(numero) {
  let a = 0,
    b = 1;
  while (a < numero) {
    let temp = a;
    a = b;
    b = temp + b;
  }
  return a === numero;
}

// O Número que vai ser verificado //

let numeroInformado = parseInt(
  prompt(
    "Digite um número para verificar se o número pertence ou não à sequência de Fibonacci:"
  )
);

if (sequenciaFibonacci(numeroInformado)) {
  console.log(
    `${numeroInformado} O número informado pertence à sequência de Fibonacci.`
  );
} else {
  console.log(
    `${numeroInformado} O número informado não pertence à sequência de Fibonacci.`
  );
}

/*3) Descubra a lógica e complete o próximo elemento:


a) 1, 3, 5, 7, _9_

b) 2, 4, 8, 16, 32, 64, _128_

c) 0, 1, 4, 9, 16, 25, 36, _49_

d) 4, 16, 36, 64, _100_

e) 1, 1, 2, 3, 5, 8, _13_

f) 2,10, 12, 16, 17, 18, 19, _21_

*/

// Criando codigo para inverter os caracteres de uma string //

function inverterString(str) {
  let resultado = '';
  for (let i = str.length - 1; i >= 0; i--) {
    resultado += str[i];
  }
  return resultado;
}

let minhaString = "Olá, Target";
let stringInvertida = inverterString(minhaString);
console.log(stringInvertida);