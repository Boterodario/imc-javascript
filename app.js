window.onload = iniciar;

function iniciar() {
  let btnCalcular = document.getElementById("btnCalcular");
  btnCalcular.addEventListener("click", clickBtnCalcular);
}

function clickBtnCalcular() {
  let txtPeso = document.getElementById("txtPeso");
  let peso = txtPeso.value;

  let txtALtura = document.getElementById("txtAltura");
  let altura = txtALtura.value;

  let imc = peso / (altura * altura);
  alert("Su IMC " + Math.round(imc));
}
