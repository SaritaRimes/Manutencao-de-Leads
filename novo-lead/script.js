function selecionaTodosCheckBoxes(origem) {
    var checkboxes = document.getElementsByName("check");

    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = origem.checked;
    }
}

function armazenaLead() {
    var nome = document.getElementById("name");
    var telefone = document.getElementById("phone");
    var email = document.getElementById("mail");

    var dados = JSON.parse(localStorage.getItem("dadosClientes"));
    if (dados == null) {
        localStorage.setItem("dadosClientes", "[]");
        dados = [];
    }

    var checkboxes = document.getElementsByName("check");
    var oportunidades = [];
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            oportunidades.push(checkboxes[i].id);
        }
    }

    var novoCliente = {
        nomeCliente: nome.value,
        telefoneCliente: telefone.value,
        emailCliente: email.value,
        statusCliente: "Cliente em Potencial",
        Oportunidades: oportunidades
    }

    dados.push(novoCliente);

    localStorage.setItem("dadosClientes", JSON.stringify(dados));

    alert("Lead incluído com sucesso!");
}