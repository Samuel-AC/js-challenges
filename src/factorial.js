const factorial = (number) => {
  var resultado = number;

  if (number === 1 || number === 0) return 1; 

  while (number > 1) { 

    number--;

    resultado = resultado * number;

  }

  return resultado;
}

module.exports = factorial;