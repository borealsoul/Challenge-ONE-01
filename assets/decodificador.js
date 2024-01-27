
window.onload = function () {
 }

function esconderTelaPadrao() {
  let tela_nao_encontrado = document.getElementById('nao-encontrado');
  let tela_resposta_texto = document.getElementById('resposta');
  let tela_resposta = document.getElementById('resposta-texto');

  tela_nao_encontrado.style.display = 'none';
  tela_resposta_texto.style.display = 'flex';

}

function pegarCampoTexto() {
  return document.getElementById('entrada-texto').value;
}

function criptografar() {
  let campo_texto = pegarCampoTexto();
 
  if (campo_texto != '') {
    esconderTelaPadrao();

    document.getElementById('texto-resposta').innerHTML = campo_texto;
  }
}
