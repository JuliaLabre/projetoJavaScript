//Chamando todas as funções na ordem de execução
const main = () => {
  const nome = perguntarNome();
  dizerBoasVindas(nome);
  const procedimentosEscolhidos = escolherProcedimento();
  let horarioAleatorio = agendamento();
  pagamento(nome, procedimentosEscolhidos, horarioAleatorio);
  finalizacao(nome);
};

//Sistema de salão de beleza que mostra as opções de procedimentos e horários.

//Função que recebe o nome e verifica se tem um nome válido
const perguntarNome = () => {
  let nome = prompt("Qual é o seu nome?");

  while (nome.length === 0 || !isNaN(nome)) {
    nome = prompt("Qual é o seu nome?");
  }

  return nome;
};

//Função que diz olá e o nome do cliente
const dizerBoasVindas = (nome) => {
  alert(`Olá, ${nome}! Seja bem vindo(a)!`);
};

function escolherProcedimento() {
  const procedimentos = [
    { id: 1, nome: "Corte", preco: 30.0 },
    { id: 2, nome: "Escova", preco: 50.0 },
    { id: 3, nome: "Corte e Escova", preco: 70.0 },
    { id: 4, nome: "Tintura", preco: 40.0 },
  ];

  procedimentos.forEach((procedimento) => {
    console.log(
      `ID: ${procedimento.id}, Nome: ${
        procedimento.nome
      }, Preço: R$ ${procedimento.preco.toFixed(2)}`
    );
  });

  let escolhas = [];
  let escolha = parseInt(
    prompt(
      "Escolha o procedimento pelo ID: \n1 - Corte de cabelo\n2 - Escova\n3 - Corte e Escova\n4 - Tintura\n (Digite 0 para Sair)"
    )
  );
  if(escolha === 0){
    alert("Programa encerrada")
    exit()
  }

  while (escolha !== 0) {
    if (!isNaN(escolha) && escolha >= 1 && escolha <= 4) {
      escolhas.push(procedimentos.find((p) => p.id === escolha));
    } else {
      alert("Por favor, escolha um procedimento disponível");
    }
    escolha = parseInt(
      prompt(
        "Se desejar escolher outro procedimento, digite o ID ou digite 0 para prosseguir: \n1 - Corte de cabelo\n2 - Escova\n3 - Corte e Escova\n4 - Tintura"
      )
    );
  }

  let procedimentosSelecionado = "Você escolheu os procedimentos:\n";

  escolhas.forEach((procedimento) => {
    procedimentosSelecionado += `${
      procedimento.nome
    }\nPreço: R$ ${procedimento.preco.toFixed(2)}\n`;
  });

  if (escolhas.length === 0) {
    procedimentosSelecionado = "Nenhum procedimento escolhido.";
  }

  return escolhas;
}

// Gera horários aleatórios e pede a confirmação do cliente.

function gerarHorarioAleatorio(intervaloInicio, intervaloFim) {
  const fracaoAleatoria = Math.random();

  const diferenca = intervaloFim - intervaloInicio;

  const horarioAleatorio =
    intervaloInicio + Math.floor(fracaoAleatoria * diferenca);

  const horarioFormatado = horarioAleatorio.toString() + ":00 horas";

  return horarioFormatado;
}

function segundatentativa() {
  horarioAleatorio = gerarHorarioAleatorio(14, 18);
  let resposta;

  do {
    resposta = prompt(
      "Podemos marcar seu atendimento às " +
        horarioAleatorio +
        "?\n\n Por favor, digite a letra 's' se sim ou digite a letra 'n' se não."
    );
    resposta.toLowerCase();

    switch (resposta) {
      case "s":
        alert(
          "Okay, marcado para o horário das " + horarioAleatorio + ". Até lá!"
        );
        break;
      case "n":
        alert("Que pena, tente agendar outro dia, estaremos à disposição!");
        break;
      default:
        alert("Opção inválida.");
        break;
    }
  } while (resposta != "s" && resposta != "n");
  
}

function agendamento() {
  const horarioAleatorio = gerarHorarioAleatorio(14, 18);
  let resposta;

  do {
    resposta = prompt(
      "Podemos marcar seu atendimento às " +
        horarioAleatorio +
        "?\n\n Por favor, digite a letra 's' se sim ou digite a letra 'n' se não."
    );
    resposta.toLowerCase();

    switch (resposta) {
      case "s":
        alert(
          "Okay, marcado para o horário das " + horarioAleatorio + ". Até lá!"
        );
        break;

      case "n":
        segundatentativa();
        break;

      default:
        alert(
          "Opção inválida, por favor digite a letra 's' se sim ou digite a letra 'n' se não."
        );
        break;
    }
    
  } while (resposta != "s" && resposta != "n");
    return horarioAleatorio;
 
}

function pagamento(nome, procedimentosEscolhidos, horarioAleatorio) {
  confirm(`${nome}, realize o pagamento para confirmar o agendamento`);

  let statusPagamento = processarPagamento(procedimentosEscolhidos, nome, horarioAleatorio);
  if (statusPagamento) {
    alert(
      `${nome} seu procedimento está confirmado e começará no horário marcado.`
    );
  } else {
    alert(
      `${nome} por favor, realize o pagamento para confirmar o agendamento`
    );
  }
}

const processarPagamento = (procedimentosEscolhidos, nome, horarioAleatorio) => {
  let total = 0;

  procedimentosEscolhidos.forEach((procedimento) => {
    total += procedimento.preco;
  });

  let cpfCliente = "";

  do {
    cpfCliente = prompt("Digite seu CPF:");
    cpfCliente = validarCPF(cpfCliente);
  }while (cpfCliente === "")
   

  let idMeioDePagamento = 0;

  while (
    isNaN(idMeioDePagamento) ||
    idMeioDePagamento < 1 ||
    idMeioDePagamento > 3
  ) {
    alert("Por favor, escolha um meio de pagamento");
    idMeioDePagamento = prompt(
      "Escolha um meio de pagamento pelo ID: \n1 - Débito\n2 - Crédito\n3 - Pix"
    );
  }

  let meioDePagamento;
  if (idMeioDePagamento == 1) {
    meioDePagamento = "Débito";
  } else if (idMeioDePagamento == 2) {
    meioDePagamento = "Crédito";
  } else {
    meioDePagamento = "Pix";
  }

  // Exibindo o recibo de pagamento
  alert(`Recibo de Pagamento:
  Nome: ${nome}
  CPF: ${cpfCliente}
  Procedimentos:
  ${procedimentosEscolhidos
    .map(
      (procedimento) =>
        `${procedimento.nome}: R$ ${procedimento.preco.toFixed(2)}`
    )
    .join("\n")}
  Total: R$ ${total.toFixed(2)}
  Meio de Pagamento: ${meioDePagamento}
  Horário Marcado: ${horarioAleatorio}
  Pagamento realizado com sucesso.`);

  return true;
};

const finalizacao = (nome) => {
  alert(
    `${nome}, Obrigado por nos visitar. Cuide bem desse novo visual e volte sempre quando precisar!`
  );
};

main();




function validarCPF(cpfCliente){

  let cpfFormatado = cpfCliente.replace(/\D/g, '');

  if(cpfFormatado.length === 11) {
    return cpfFormatado.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "\$1.\$2.\$3-\$4");
  }else{
    alert("CPF inválido.");
    return "";
  }
}
