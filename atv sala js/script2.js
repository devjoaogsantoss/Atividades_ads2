console.log("Olá, Garçom");
alert("Registre a Conta!");

const consumo = prompt("Qual o valor da total da conta");
const divPessoas = prompt("Quantas pessoas dividiram a conta");
const resumoConta = consumo / divPessoas;
alert(`---Resumo da Conta:--- \n Total: R$ ${consumo}! \n Divisão por pessoa (3 pessoas): R$ ${resumoConta}`)