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

const main03 = () => {
    agendamento();
}

main03();
