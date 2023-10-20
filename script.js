
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

main()