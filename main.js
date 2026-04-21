let saldo = 0;
let extrato = [];


function atualizarTela() {
    document.getElementById("saldo").innerText = saldo.toFixed(2);

}

function depositar() {
    let valor =
        Number(document.getElementById("valor").value);

    if (valor > 0) {
        saldo += valor;
        extrato.push("Deposito: + R$:  " + valor);
        alert ("Deposito realizado: R$ "+ valor)
    }
    else {
        alert("Valor Inválido");
    }
    atualizarTela();
}

function sacar() {
    let valor =
        Number(document.getElementById("valor").value);

    if (valor <= 0) {
        alert("Valor Inválido");
    }
    else if (valor > saldo) {
        alert("Saldo Insuficiente");
    }
    else {
        saldo -= valor;
        extrato.push("Saque - R$: " + valor);
        alert(" Saque realizado: R$ "+ valor);
    }

    atualizarTela();
}

function verExtrato() {
    console.log("=== EXTRATO ===");

    let texto = "";

    if (extrato.length === 0) {
        texto = "Nenhuma movimentação realizada.";
        console.log(texto);
    } else {
        for (let i = 0; i < extrato.length; i++) {
            console.log(extrato[i]);
            texto += extrato[i] + "<br>";
        }
    }

    texto += "<br><strong>Saldo atual: R$ " + saldo.toFixed(2) + "</strong>";

    document.getElementById("extratoTela").innerHTML = texto;

    console.log("Saldo atual:"+ saldo);
}
