const numeroSenha = document.querySelector('.parametro-senha');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('parametro-senha-botao')
botoes[0].onclick = diminuiTamanho
botoes[1].onclick = aumentaTamanho


function diminuiTamanho() {



    numeroSenha.textContent = tamanhoSenha

}
function aumentaTamanho() {
    if (tamanhoSenha < 20) {
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
}