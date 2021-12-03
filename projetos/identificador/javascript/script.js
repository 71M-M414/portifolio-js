//Objetivo:
//pegar o ano de nascimento e sexo da pessoa e dizer:
// idade
// se é menino, menina,homem,mulher ,idoso ou idosa
// mostrar uma imagem
// Validação
let AnoNascimentoInput = document.getElementById("AnoNascimento");
let Sexo = document.getElementById("Sexo");
let AnoAtual = new Date().getFullYear();
let MostrarEmTela = document.getElementById("VisualizarPessoa");
let btn = document.getElementById("btn");

function MostrarResultado() {
  let AnoNascimento = Number(AnoNascimentoInput.value);
  let idade = AnoAtual - AnoNascimento;

  if (Sexo.value === "Masculino" && idade <= 14) {
    MostrarEmTela.innerHTML = `
      <img src="./img/crianca-menino.jpg" alt="criança" class="pessoa-img" />
    <p> Vc é um menino de ${idade} anos</p>
    `;
  } else if (Sexo.value === "Feminino" && idade <= 14) {
    MostrarEmTela.innerHTML = `
      <img src="./img/crianca-menina.jpg" alt="criança" class="pessoa-img" />
    <p> Vc é uma menina de ${idade} anos</p>
    `;
  } else if (Sexo.value === "Masculino" && idade > 14 && idade <= 18) {
    MostrarEmTela.innerHTML = `
      <img src="./img/homem-jovem.jpg" alt="jovem" class="pessoa-img" />
    <p>Você é um jovem de ${idade} anos</p>
    `;
  } else if (Sexo.value === "Feminino" && idade > 14 && idade <= 18) {
    MostrarEmTela.innerHTML = `
      <img src="./img/mulher-jovem.jpg" alt="jovem" class="pessoa-img" />
    <p> Você é uma jovem de ${idade} anos </p>
    
    `;
  } else if (Sexo.value === "Masculino" && idade > 18 && idade <= 59) {
    MostrarEmTela.innerHTML = `
      <img src="./img/homem-adulto.jpg" alt="adulto" class="pessoa-img" />
    <p> Você é um adulto de ${idade} anos </p>
    `;
  } else if (Sexo.value === "Feminino" && idade > 18 && idade <= 59) {
    MostrarEmTela.innerHTML = `
      <img src="./img/mulher-adulta.jpg" alt="adulta" class="pessoa-img" />
    <p> Você é uma adulta de ${idade} anos</p>
    `;
  } else if (Sexo.value === "Masculino" && idade > 59) {
    MostrarEmTela.innerHTML = `
      <img src="./img/senhor.jpg" alt="senhor" class="pessoa-img" />
    <p>Você é um senhor de ${idade} anos </p>
    `;
  } else if (Sexo.value === "Feminino" && idade > 59) {
    MostrarEmTela.innerHTML = `
      <img src="./img/senhora.jpg" alt="senhora" class="pessoa-img" />
    <p>Você é uma senhora de ${idade} anos </p>
    `;
  } else {
    MostrarEmTela.innerHTML = `
        <img src="./img/pessoa.jpg" alt="pessoa" class="pessoa-img" />
    <p>Você é uma pessoa de ${idade} anos </p>
    `;
  }
}

function Validar() {
  if (AnoNascimentoInput.value === "") {
    return alert('ERRO : o campo "ANO DE NASCIMENTO" não pode estar vazio');
  } else if (AnoNascimentoInput.value > AnoAtual) {
    return alert(
      "ERRO: você ainda não nasceu , por acaso você é um(a) viajante do futuro "
    );
  } else if (AnoNascimentoInput.value < 1900) {
    return alert(
      'ERRO:  "ANO DE NASCIMENTO" é invalido , valor minimo é :1900 '
    );
  } else {
    MostrarResultado();
  }
}

document.addEventListener("keydown", (TeclaPressionada) => {
  if (TeclaPressionada.key === "Enter") {
    Validar();
  }
});
