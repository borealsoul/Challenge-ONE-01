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

function apertoBotao(botao) {
  let campo_texto = pegarCampoTexto();
  let resposta_texto;

  if (!eTextoPermitido(campo_texto)) {
    console.log(eTextoPermitido(campo_texto));
    return false;
  } else if (botao == "criptografar") {
    resposta_texto = criptografar(campo_texto);
  } else if (botao == "descriptografar") {
    resposta_texto = descriptografar(campo_texto);

  }
  esconderTelaPadrao();
  alterarResposta(resposta_texto);
}


function criptografar(texto) {
  texto = texto.replaceAll("e", "enter");
  texto = texto.replaceAll("i", "imes");
  texto = texto.replaceAll("a", "ai");
  texto = texto.replaceAll("o", "ober");
  texto = texto.replaceAll("u", "ufat");

  return texto;
}

function descriptografar(texto) {
  texto = texto.replaceAll("ufat", "u");
  texto = texto.replaceAll("ober", "o");
  texto = texto.replaceAll("ai", "a");
  texto = texto.replaceAll("imes", "i");
  texto = texto.replaceAll("enter", "e");

  return texto;
}
