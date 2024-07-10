// calculo.js
function pegar() {
  const pegarAlt = document.getElementById("altura");
  const modificar = document.querySelector(".cont-conteudo")
  const newH1 = document.querySelector(".h1")
  const buto = document.querySelector(".botao")


  const altura = pegarAlt.value;
  console.log(altura);

  const pegarPeso = document.getElementById("peso");
  const peso = pegarPeso.value;
  console.log(peso);

  const pegarSexoH = document.getElementById("homem");
  const homem = pegarSexoH.checked;
  console.log(homem);

  const pegarSexoM = document.getElementById("mulher");
  const mulher = pegarSexoM.checked;
  console.log(mulher);

  const somaAlt = (altura * 2) / 100;
  const imc = (peso / somaAlt).toFixed(2);
  console.log(imc);

  modificar.classList.add("apagar")
  buto.classList.add("apagar")
  newH1.innerHTML = (`Seu IMC esta ${imc}Kg/m²` )

  return imc;
}










