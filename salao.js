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
