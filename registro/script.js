function armazenaRegistro() {
    var registroUsuario = document.getElementById("username");
    var registroPassword = document.getElementById("password");
    var confirmPassword = document.getElementById("confirmPassword");

    if (password.value != confirmPassword.value) {
        alert("As senhas não são iguais.");
    }
    else {
        var dados = JSON.parse(localStorage.getItem("dadosRegistros"));
        if (dados == null) {
            localStorage.setItem("dadosRegistros", "[]");
            dados = [];
        }

        var auxRegistro = {
            nome: registroUsuario.value,
            senha: registroPassword.value
        }

        dados.push(auxRegistro);

        localStorage.setItem("dadosRegistros", JSON.stringify(dados));

        alert("Novo usuário registrado com sucesso!");
    }    
}