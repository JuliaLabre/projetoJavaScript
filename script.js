// Variáveis de escopo global
let procedimentoEscolhido = "";
let horarioAleatorio = "";

//Chamando todas as funções na ordem de execução
const main = () => {
  const nome = perguntarNome();
  dizerBoasVindas(nome);
  escolherProcedimento();
  agendamento()
  pagamento(nome, procedimentoEscolhido, horarioAleatorio)
  finalizacao(nome);

}

//Sistema de salão de beleza que mostra as opções de procedimentos e horários.

//Função que recebe o nome e verifica se tem um nome válido
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
  procedimentos.forEach((procedimentos) => {
    console.log(`ID: ${procedimentos.id}, Nome: ${procedimentos.nome}, Preço: R$ ${procedimentos.preco.toFixed(2)}`);
  });

  let escolha = parseInt(prompt("Escolha o procedimento pelo ID: \n1 - Corte de cabelo\n2 - Escova\n3 - Corte e Escova\n4 - Tintura"));

  while (isNaN(escolha) || escolha < 1 || escolha > 4) {
    alert("Por favor, escolha um procedimento disponível")
    escolha = parseInt(prompt("Escolha o procedimento pelo ID: \n1 - Corte de cabelo\n2 - Escova\n3 - Corte e Escova\n4 - Tintura"));
  }

  switch (escolha) {

    case 1:
      const corte = procedimentos[0];
      procedimentoEscolhido = `Você escolheu o procedimento:\n${corte.nome}\nPreço: R$ ${corte.preco.toFixed(2)}`;
      document.write(procedimentoEscolhido);
      break;
    case 2:
      const escova = procedimentos[1];
      procedimentoEscolhido = `Você escolheu o procedimento:\n${escova.nome}\nPreço: R$ ${escova.preco.toFixed(2)}`;
      document.write(procedimentoEscolhido);
      break;
    case 3:
      const corteEscova = procedimentos[2];
      procedimentoEscolhido = `Você escolheu o procedimento:\n${corteEscova.nome}\nPreço: R$ ${corteEscova.preco.toFixed(2)}`;
      document.write(procedimentoEscolhido);
      break;
    case 4:
      const tintura = procedimentos[3];
      procedimentoEscolhido = `Você escolheu o procedimento:\n${tintura.nome}\nPreço: R$ ${tintura.preco.toFixed(2)}`;
      document.write(procedimentoEscolhido);
      break;
    default:
      const mensagemErro = "Procedimento não encontrado. Por favor, escolha um ID válido.";
      document.write(mensagemErro);
  }

  return procedimentoEscolhido
}

// Gera horários aleatórios e pede a confirmação do cliente.

function gerarHorarioAleatorio(intervaloInicio, intervaloFim) {

  const fracaoAleatoria = Math.random();

  const diferenca = intervaloFim - intervaloInicio;

  const horarioAleatorio = intervaloInicio + Math.floor(fracaoAleatoria * diferenca);

  const horarioFormatado = horarioAleatorio.toString() + ":00 horas";

  return horarioFormatado;
}

function segundatentativa() {

  horarioAleatorio = gerarHorarioAleatorio(14, 18);
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
  return horarioAleatorio
}

function agendamento() {

  horarioAleatorio = gerarHorarioAleatorio(7, 11);
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
    return horarioAleatorio

  } while (resposta != 's' && resposta != 'n');



}

//Comanda de serviço


function pagamento(nome, procedimentoEscolhido, horarioAleatorio) {

  const pagamentoFeito = confirm(`${nome}\n${procedimentoEscolhido} ás ${horarioAleatorio} \n Realize o pagamento para iniciar`);
  if (pagamentoFeito) {
    alert(`${nome} seu procedimento está confirmado e começará no horário marcado.`);
  } else {
    alert(`${nome} \n ${procedimentoEscolhido} ás ${horarioAleatorio} \n Realize o pagamento para iniciar \n Começaremos assim que recebermos o pagamento`);
  }
}


const finalizacao = (nome) => {
  alert(`${nome}, Obrigado por nos visitar. Cuide bem desse novo visual e volte sempre quando precisar!`)
}


main()