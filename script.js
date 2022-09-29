/* Escreva um programa em javascript que peça o nome de um turista e então pergunte se ele já visitou alguma cidade. Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma variável, e então continue perguntando se o turista visitou alguma outra cidade até que a resposta seja não. No fim, o programa deve exibir o nome so turista, quantas cidades ele visitou.
 */

const turista = prompt("Qual é o nome do turista?");
let cidadesVisitadas = "";
let numerosCidades = 0;
let continuar = prompt("Você já visitou alguma cidade? (Sim/Não)");

while (continuar === "sim") {
  let cidade = prompt("Qual é a cidade que visitou?");
  cidadesVisitadas += `\n - ${cidade} `;
  numerosCidades++;
  continuar = prompt("Visitou alguma outra cidade (Sim/Não)");
}

alert(
  `Nome do Turista: ${turista} \nNúmero de cidade visitada: ${numerosCidades} \nCidade visitada: ${cidadesVisitadas} \n`
);
