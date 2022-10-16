/*
//Concatenação de String:

//Declarações das variáveis:

 var nome, sobreNome, NomeCompleto;

//atribuição de valor às variáveis:

nome ="Yuri";
sobreNome = "Corêa";
NomeCompleto = nome +" "+ sobreNome;

//saída:

document.getElementById("texto").innerHTML = NomeCompleto;
 */
 
/* A variaviel let, não pode ser redeclarada uma vez que ja definimos seu valor antes;
exemplo:
let pessoa = "Yuri";

console.log(pessoa);

// Será imprimido o valor "Yuri".
// Se redeclararmos o volor de let, assim:

//let pessoa = "João";
//console.log(pessoa);
// Teremos um erro.
*/

/*Já a variavel var, podemos redefinir o seu valor, após termos definido anteriormente, assim:

var pessoa = "Yuri";

//console.log(pessoa);
// O resultado na saída será Yuri;
// Vamos redefinir o valor de pessoa, mantendo o valor que atribuimos acima:

var pessoa= "João";

console.log(pessoa);

// O resultado será João;
*/ 

/*let x = 10; aqui o valor é 10.

{
    let x = 20; aqui o valor é 20.

}

document.getElementById("texto").innerHTML= x;
Dentro do bloco de código o valor de let é 20, pois redefinimos o seu valor.
Já por fora do bloco de código o seu valor é 10; 
*/
/* Já o const, significa que nunca essa variavel poderá ter seu valor alterado no código, e não importa se está fora
ou dentro de um bloco, o valor desata nunca será alterado, configurando então o const, como a mais restrita de uso.

const x = 10;

{
    const x = 20;

}

const x = 50; vai estourar um erro, pois const já tem valor defindo que é 10.

o resultado da saída sempre será 10.*/

// Operador de incremento (++) e decremento (--);
 
/*var valor1, valor2, total;
valor1 = 5;
valor2 = 2;
total = ++ valor1; // adicionando +1 no valor que já existe na variável valor1 

alert(valor1);

document.getElementById("texto").innerHTML = --valor1; // decrementando -1 na variável valor2;
*/

/* Usando o operador de atibuição +=;

var valor1, valor2;
valor1= 5;
valor2= 2;

valor1 =valor1 + valor2;
para não repetirmos a variavé, usamos o atalho com o operador de atribuição +=,
que será a mesma coisa se repetirmos a variável, assim:

var valor1, valor2;

valor1= 5:
valor2= 2;

valor1 += valor2; isso é o mesmo que;
valor1= valor1+ valor2;

a mesma coisa  serve para o operador de atribuição -=.
 
valor1 -= valor2; isso é o mesmo que;
valor1= valor1- valor2;
*/
/*Operadores de  comparação.
 var valor1, valor2, total;

 valor1= 8;
 valor2= 10;
 
 total = (valor1 ==valor2);

 alert(total);
 se valor1=8; e valor2=8; total =(valor1==valor2); o resultado será true.
 */ 

 /* Operador de comparação de tipo de valor:
    var valor1, valor2, total;

 valor1= 8;
 valor2= 8;
 
 total = (valor1 === valor2);

 alert(total);
 se valor1=8; e valor2=8; total =(valor1===valor2); o resultado será true.

 # PARA DAR FALSE SERIA ASSIM:

var valor1, valor2, total;

 valor1= "8";
 valor2= 8;
 
 total = (valor1 === valor2);

 alert(total);
 se valor1=8; e valor2=8; total =(valor1===valor2); o resultado será FALSE.Pois valor1 é do tipo texto "  ", 
 como indicam as aspas, e valor2 é do tipo número.

*/
/*Operador de comparação !=, significa diferente, ou literalmente NÃO IGUAL.

var valor1, valor2, total;
valor1 = 5;
valor2 = 10;
total = (valor1 != valor2); TRUE

alert(total);

Se valor1= 5; e valor2 = 5; total=(valor1 != valor2), o resultado seria FALSE.

# TAMBÉM DÁ PARA COMPARAR O TIPO DE VALOR (SE IGUAIS OU NÃO IGUAIS), ASSIM:

var valor1, valor2, total;
valor1 = "5";
valor2 = "10";
total = (valor1 !== 5); 

alert(total);

Se valor1= "5"; e valor2 = "10"; total=(valor1 !== 5), o resultado seria FALSE.

*/ 
/* Operadores lógicos (< maior, >menor, <= maior igual, >= menor igual),
seguem a mesma lógica de todos, testa testa algom, e tras como resultado (Verdairo ou Falso).
var valor1, valor2, total;
valor1 = 11;
valor2 = 12;

total =(valor1 > 10);

document.getElementById("texto").innerHTML= total;
*/

/*Observe como usamos os Operadores condicionais ou Ternários, aplicando-os no momento 
em que declaramos a variável.

var idade, eleitor;

idade = 18;
eleitor = (idade >= 18) ? "APTO A VOTAR": "NÃO VOTA";

alert("O resultado é:" + eleitor)

document.getElementById("texto").innerHTML = eleitor;
*/

/* Operadores de  Lógicos, usamos quando queremos passar  mais de uma condição
var idade, eleitor, resultado;
idade = 18;
eleitor = (idade >= 18) ? "APTO A VOTAR": "AINDA MENOR DE IDADE, AGUARDE";

resultado= (idade> 60 && idade< 70);
alert(resultado);
*/
/*# Operador Lógico OU:
var idade, eleitor, resultado;
idade = 18;
eleitor = (idade >= 18) ? "APTO A VOTAR": "AINDA MENOR DE IDADE, AGUARDE";

resultado= (idade> 60 || idade< 19);
alert(resultado);
*/

// FUNÇOES:
/*
function soma (valor1, valor2){
    return valor1 + valor2;
}

document.getElementById("texto").innerHTML = soma(10,20);

function realParadolar(real, cotacaoDolar) {
    return real * cotacaoDolar;
}

var total = realParadolar(10, 5.08);
//alert (total);
document.getElementById("idade").innerHTML = total;
*/
/*
function alertaHello(){
    alert("olá pessoal");
}

alertaHello();
*/ 
/*Objetos:
const carro = {
    marca:"Fiat", 
    cor: "Cinza", 
    modelo:"Uno", 
    ano:2011, 
    placa:"123-abc",
    buzina: function() {alert("Biiiiiiii")}
};
carro.buzina(); chamar um método;
console.log(carro.placa); ou;
console.log(carro["placa"]);
*/

