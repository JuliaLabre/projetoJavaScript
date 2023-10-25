
const main = () => {
  const nome = perguntarNome();
  dizerBoasVindas(nome);
  escolherProcedimento();
  agendamento()
  pagamento()
  finalizacao(nome);

}

//Sistema de salão de beleza para corte de cabelo

//Função que recebe o nome de quem deseja cortar o cabelo
const perguntarNome = () => {
  let nome = prompt("Qual é o seu nome?");

  while (nome.length === 0 || !isNaN(nome)) {
    nome = prompt("Qual é o seu nome?");
  }

  return nome
}

//Função que diz olá e o nome do cliente
const dizerBoasVindas = (nome) => {
  alert(`Olá, ${nome}! Seja bem vindo(a)!`);
}

function escolherProcedimento() {
  const procedimentos = [
    { id: 1, nome: 'Corte', preco: 30.00 },
    { id: 2, nome: 'Escova', preco: 50.00 },
    { id: 3, nome: 'Corte e Escova', preco: 70.00 },
    { id: 4, nome: 'Tintura', preco: 40.00 }

  ];

  //alert("Clique em 'Ok' para ver os procedimentos disponíveis");
  procedimentos[0].procedimentos.forEach((procedimento) => {
    console.log(`ID: ${procedimento.id}, Nome: ${procedimento.nome}, Preço: R$ ${procedimento.preco.toFixed(2)}`);
  });

  let escolha = parseInt(prompt("Escolha o procedimento pelo ID: \n1 - Corte de cabelo\n2 - Escova\n3 - Corte e Escova"));

  while (isNaN(escolha) || escolha < 1 || escolha > 3) {
    alert("Por favor, escolha um procedimento disponível")
    escolha = parseInt(prompt("Escolha o procedimento pelo ID: \n1 - Corte de cabelo\n2 - Escova\n3 - Corte e Escova"));
  }

  switch (escolha) {
    case 1:
      const corte = procedimentos[0].procedimentos[0];
      const resultadoCorte = `Você escolheu o procedimento:\n${corte.nome}\nPreço: R$ ${corte.preco.toFixed(2)}`;
      document.write(resultadoCorte);
      break;
    case 2:
      const escova = procedimentos[0].procedimentos[1];
      const resultadoEscova = `Você escolheu o procedimento:\n${escova.nome}\nPreço: R$ ${escova.preco.toFixed(2)}`;
      document.write(resultadoEscova);
      break;
    case 3:
      const corteEscova = procedimentos[0].procedimentos[2];
      const resultadoCorteEscova = `Você escolheu o procedimento:\n${corteEscova.nome}\nPreço: R$ ${corteEscova.preco.toFixed(2)}`;
      document.write(resultadoCorteEscova);
      break;
    default:
      const mensagemErro = "Procedimento não encontrado. Por favor, escolha um ID válido.";
      document.write(mensagemErro);
  }
}



function gerarHorarioAleatorio(intervaloInicio, intervaloFim) {

  const fracaoAleatoria = Math.random();

  const diferenca = intervaloFim - intervaloInicio;

  const horarioAleatorio = intervaloInicio + Math.floor(fracaoAleatoria * diferenca);

  const horarioFormatado = horarioAleatorio.toString() + ":00 horas";

  return horarioFormatado;
}

function segundatentativa() {

  let horarioAleatorio = gerarHorarioAleatorio(14, 18);
  let resposta;

  do {

    resposta = prompt("Podemos marcar seu atendimento às " + horarioAleatorio + "?\n\n Por favor, digite a letra 's' se sim ou digite a letra 'n' se não.");
    resposta.toLowerCase();

    switch (resposta) {
      case 's':
        alert("Okay, marcado para o horário das " + horarioAleatorio + ". Até lá!");
        break;
      case 'n':
        alert("Que pena, tente agendar outro dia, estaremos à disposição!");
        break;
      default:
        alert("Opção inválida.");
        break;
    }

  } while (resposta != 's' && resposta != 'n');

}

function agendamento() {

  let horarioAleatorio = gerarHorarioAleatorio(7, 11);
  let resposta;

  do {

    resposta = prompt("Podemos marcar seu atendimento às " + horarioAleatorio + "?\n\n Por favor, digite a letra 's' se sim ou digite a letra 'n' se não.");
    resposta.toLowerCase();

    switch (resposta) {

      case 's':

        alert("Okay, marcado para o horário das " + horarioAleatorio + ". Até lá!");
        break;

      case 'n':

        segundatentativa();
        break;

      default:
        alert("Opção inválida, por favor digite a letra 's' se sim ou digite a letra 'n' se não.");
        break;
    }

  } while (resposta != 's' && resposta != 'n');

}

//Comanda de serviço


function pagamento() {
  if (realizarPagamento) {
    const pagamentoFeito = confirm(clienteAtivo + " ,seu procedimento está marcado às " + horarioEscolhido + "\n" + "Realize o pagamento no valor de " + valor);
    if (pagamentoFeito) {
      alert(clienteAtivo + " seu procedimento está confirmado e começará no horário marcado" + "\n" + "Agradecemos a preferência, volte sempre!");
    } else {
      alert(clienteAtivo + " ,seu procedimento está marcado às " + horarioEscolhido + "\n" + "Realize o pagamento no valor de " + valor + "\n" + "Começaremos assim que recebermos o pagamento");
    }
  }
}

const finalizacao = (nome) => {
  alert(`${nome}, Obrigado por nos visitar. Cuide bem desse novo visual e volte sempre quando precisar!`)
}


main()