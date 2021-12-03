var valor; // variavél que irá receber o valor que será mostrado no visor

var resultado; //variavél que irá  receber a função eval que irá executar a conta e depois será usada para mostrar o resutado da conta para o usuario

function botao(valorBtn) {
  //* função que recebe o valor do botão da calculadora
  valor = document.calc.visor.value += valorBtn; // aqui valor esta recebendo o valor do botão digitado na calculadora
}

//? RESETAR O VISOR

function reseta() {
  //* função responsavél por limpar o visor da calculadora
  document.calc.visor.value = ""; //aqui estamos acessando o visor e deixando ele com o valor  vazio assim apagando os valores digitados anteriormente
}

//? EFETUAR O CALCULO

function calcula() {
  //* função responsavél por executar a conta
  resultado = eval(valor); // A função eval() computa um codigo JS representado como uma string no caso ele esta recebendo o valor string do que foi digitado pelo o usario , identificando e fazendo a expressão aritmética

  document.calc.visor.value = resultado; // aqui é parecido com o que aconteceu na function reseta , só que invés de apagar o value nos estamos fazendo ele receber a var resultado assim mostrando o resultado da conta
}
