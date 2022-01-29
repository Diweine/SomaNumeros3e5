
//Função para exibição dos resultados na tela
function exibeResultado() {
  var x = document.getElementById("num").value;

  var text = '';

  if (valida_campo() != false) {

    if (!isNaN(x)) {
      text = "<span class='azul'>Somatório: <span class='negrito'>" + soma(x) + "</span></span>";
    } else {
      text = "<span class='vermelho'>Nenhum número foi informado</span>";
    }

    document.getElementById("num").value = "";
    document.getElementById("result").innerHTML = text;
    document.getElementById("num").focus();
  }
}

// Função para validar se o campo está vazio
function valida_campo() {
  if (document.getElementById("num").value == "") {
    alert('Por favor, preencha o campo com um número inteiro.');
    document.getElementById("num").focus();
    return false
  }
}

//Função para somatório dos números divisíveis por 3 e 5 menores que número informado
function soma(valor) {
  var div3 = [];
  var div5 = [];
  var somanumeros;

  if (valor > 3) {

    for (var i = 3; i < valor; i++) {
      if (i % 3 == 0) {
        div3.push(i);
      }
    }

    for (var j = 5; j < valor; j++) {
      if (j % 5 == 0) {
        div5.push(j);
      }
    }

    //unindo os dois arrays
    var div3e5 = [...div3, ...div5];

    //removendo elementos duplicados no array
    var filtroArray = div3e5.filter((ele, pos) => div3e5.indexOf(ele) == pos);

    //Ordenando em ordem crescente os elementos do array 
    filtroArray.sort(function (a, b) {
      return a - b;
    });

    //exibindo elementos do array
    exibeArray(filtroArray);

    //Somando os elementos do array
    somanumeros = filtroArray.reduce(function (soma, i) {
      return soma + i;
    });

  } else {
    somanumeros = 0;

    //exibindo elementos do array
    exibeArray(somanumeros);
  }

  return somanumeros;
}

//Função para exibir os elementos do array no console e na tela
function exibeArray(arr) {

  var elementos = '';

  if (arr != 0) {

    console.log(arr);

    elementos = "<span class='azul'> Números somados: " + arr + "</span>";

  }else{

    elementos = "<span class='vermelho'>Nenhum número foi somado</span>";

  }

  document.getElementById("elementos_array").innerHTML = elementos;

}