function comparaNumeros(num1, num2) {
  const saoIguais = num1 === num2
  const soma = num1 + num2

  if (saoIguais) {
    return 'São iguais'
  }

  return 'Não são iguais'
}



/*Também pode ser feito dessa forma
function comparaNumeros(num1, num2) {
  const saoIguais = num1 === num2
  const soma = num1 + num2

  return saoIguais ? "São iguais" : "Não são iguais";
}
*/

