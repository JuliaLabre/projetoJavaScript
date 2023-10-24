
const main = () => {
  const nome = perguntarNome();
  dizerBoasVindas(nome);
 
}

//Sistema de salão de beleza para corte de cabelo

//Função que recebe o nome de quem deseja cortar o cabelo
const perguntarNome = () => {
    let nome = prompt("Qual é o seu nome?");
    
    while (nome.length === 0 || !isNaN(nome)){
      nome = prompt("Qual é o seu nome?");
    } 
    
    return nome
}

//Função que diz olá e o nome do cliente
const dizerBoasVindas = (nome) => {
  alert(`Olá, ${nome}! Seja bem vindo(a)!`);
}

function pagamento() {
  if (realizarPagamento) {
      const pagamentoFeito = confirm(clienteAtivo + " ,seu procedimento está marcado às " + horarioEscolhido + "\n" + "Realize o pagamento no valor de " + valor);
      if (pagamentoFeito) {
          alert(clienteAtivo + " seu procedimento está confirmado e começará no horário marcado" + "\n" +"Agradecemos a preferência, volte sempre!");
      } else {
          alert(clienteAtivo + " ,seu procedimento está marcado às " + horarioEscolhido + "\n" + "Realize o pagamento no valor de " + valor + "\n" + "Começaremos assim que recebermos o pagamento");
      }
  }
}


main()