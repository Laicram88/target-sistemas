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

var indice = 13;
var soma = 0;
var k = 0;

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
  var a = 0,
    b = 1;
  while (a < numero) {
    var temp = a;
    a = b;
    b = temp + b;
  }
  return a === numero;
}

// O Número que vai ser verificado //

var numeroInformado = parseInt(
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



/* 4)Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.

Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

Respondendo a pergunta :

Imaginando que os interrupitores 1 e 3 tivessem sido pressionados com 1 ou 2 minutos de diferença e o 2 não tivesse sido ligado teria ido a primeira vez na sala 1 e depois na sala 3 e teria verificado qual das lampadas estivessem mais quente que a outra e a fria seria o 2 interruptor

*/



/* 5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;*/

// Criando codigo para inverter os caracteres de uma string //

function inverterString(str) {
  var resultado = "";
  for (var i = str.length - 1; i >= 0; i--) {
    resultado += str[i];
  }
  return resultado;
}

var minhaString = "Olá, Target";
var stringInvertida = inverterString(minhaString);
console.log(stringInvertida);
