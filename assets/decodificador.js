const eLetraMinusculaOuEspaco = (string) => /^[a-z]| *$/.test(string);
// Baseado na resposta:
// https://stackoverflow.com/questions/1027224/

function pegarCampoTexto() {
  return document.getElementById('entrada-texto').value;
}

function alterarResposta(resposta) {
  document.getElementById('texto-resposta').innerHTML = resposta;
}

function eTextoPermitido(texto) {
  if (texto != '') {
    for (let i = 0; i < texto.length; i++) {
      if (!eLetraMinusculaOuEspaco(texto[i])) {
        return false;
      }
    }

    return true;
  }
}

function esconderTelaPadrao() {
  let tela_nao_encontrado = document.getElementById('nao-encontrado');
  let tela_resposta_texto = document.getElementById('resposta');

  tela_nao_encontrado.style.display = 'none';
  tela_resposta_texto.style.display = 'flex';

}

function criptografar() {
  let campo_texto = pegarCampoTexto();

  if (!eTextoPermitido(campo_texto)) {
    console.log(eTextoPermitido(campo_texto));
  } else {
    campo_texto = campo_texto.replaceAll("e", "enter");
    campo_texto = campo_texto.replaceAll("i", "imes");
    campo_texto = campo_texto.replaceAll("a", "ai");
    campo_texto = campo_texto.replaceAll("o", "ober");
    campo_texto = campo_texto.replaceAll("u", "ufat");

    esconderTelaPadrao();
    alterarResposta(campo_texto);
  }
}

