function calcula_Imc() {
  let nome = document.getElementById("nome").value;;
  let altura = Number(document.getElementById("altura").value);
  let peso = Number(document.getElementById("peso").value);
  let resposta = document.getElementById("resposta");

  let imc = peso / (altura * altura).toFixed(1);
  if (imc < 15.9) {
    resposta = "Magreza Grave";
  } else if (imc >= 16 && imc <= 16.9) {
    resposta = "Magreza Moderada";
  } else if (imc >= 17 && imc <= 18.5) {
    resposta = "Magreza Leve";
  } else if (imc > 18.5 && imc <= 24.9) {
    resposta = "Saudável";
  } else if (imc >= 25 && imc <= 29.9) {
    resposta = "Sobrepeso";
  } else if (imc >= 30 && imc <= 34.9) {
    resposta = "Obesidade Grau 1";
  } else if (imc >= 35 && imc <= 39.9) {
    resposta = "Obesidade Grau 2 (Severa)";
  } else {
    resposta = "Obesidade Grau 3 (Mórbida)";
  }
  document.getElementById(
    "resposta"
  ).innerHTML = `Sua situação senhor ${nome} é ${resposta}`;
}
