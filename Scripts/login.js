function Login() {
    window.location.href="login.html";
    
}

function UsuarioSenha() {
    const inputSenha = document.getElementById('senha');
    const inputUsuario = document.getElementById('usuario');
    const logar = document.getElementById('logar');

    const usuario = inputUsuario.value;
    const senha = inputSenha.value;

    if (usuario === "1234" && senha === "1234") {
        logar.textContent = 'Login concluído.'
    } 
    else {
        logar.textContent = 'Usuário ou senha incorretos, por favor tente novamente.';
    }

    window.location.href="index.html";
}