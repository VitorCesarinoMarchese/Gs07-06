function Login() {
    window.location.href="login.html";
}
function voltar(){
    window.history.back()
}

function UsuarioSenha() {
    const inputSenha = document.getElementById('senha');
    const inputUsuario = document.getElementById('usuario');
    const usuario = inputUsuario.value;
    const senha = inputSenha.value;

    if (usuario === "1234" && senha === "1234") {
        window.alert('Login concluído.')
    } 
    else {
        window.alert("Usuário ou senha incorretos, por favor tente novamente.");
    }
}