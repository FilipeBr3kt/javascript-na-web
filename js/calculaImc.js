var pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var tdAltura = paciente.querySelector(".info-altura");
  var tdPeso = paciente.querySelector(".info-peso");
  var tdImc = paciente.querySelector(".info-imc");

  var altura = tdAltura.textContent;
  var peso = tdPeso.textContent;

  var alturaEhValida = validaPeso(peso);
  var pesoEhValido = validaAltura(altura);

  if (!pesoEhValido) {
    console.log("Peso inválido");
    pesoEhValido = false;
    tdImc.textContent = "peso inválido";
    paciente.classList.add("peso-invalido");
  }

  if (peso <= 0 || peso > 1000) {
    console.log("Peso inválido!");
    tdPeso.textContent = "Peso inválido!";
    pesoEhValido = false;
  }

  if (!alturaEhValida) {
    console.log("Altura inválida!");
    tdAltura.textContent = "Altura inválida!";
    alturaEhValida = false;
    //paciente.style.backgroundColor = "lightcoral";
    //paciente.style.color = "red";
    paciente.classList.add("paciente-invalido");
  }

  if (alturaEhValida && pesoEhValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);
  }
}

function validaPeso(peso) {
  if (peso >= 0 && peso < 1000) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if (altura >= 0 && altura <= 3) {
    return true;
  } else {
    return false;
  }
}

function calculaImc(peso, altura) {
  var imc = 0;

  imc = peso / (altura * altura);

  return imc.toFixed(2);
}
