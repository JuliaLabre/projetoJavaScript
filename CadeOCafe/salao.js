
function escolherProcedimento() {
    const procedimentos = [
        {
            nome: 'Corte de Cabelo',
            procedimentos: [
                { id: 1, nome: 'Corte', preco: 30.00 },
                { id: 2, nome: 'Escova', preco: 50.00 },
                { id: 3, nome: 'Corte e Escova', preco: 70.00 }
            ]
        }
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


escolherProcedimento();
