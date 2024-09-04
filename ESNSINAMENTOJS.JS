var c = 30; //VAR DA PARA COLOCAR VARIAS ARMAZENADAS A SUA VARIÁVEL MAIS SÓ VALE O ÚLTIMO
var c = 40;
console.log(c); // 40

    let d = 50; // LET É PARA VARIÁVEIS ARMAZENADAS SÓ UMA VEZ 
    // let d = 60; // Erro: d já foi declarada
    //Um array é uma estrutura de dados que permite armazenar múltiplos valores em uma única variável. 
    //Esses valores podem ser de qualquer tipo, como números, strings, objetos, ou até mesmo outros arrays. 
    //No JavaScript, arrays são muito flexíveis e amplamente utilizados para armazenar e manipular conjuntos 
    //de dados. COM UM arrays é posssivel armazenar varios valores de uma vez
    //Aritméticos: +, -, *, /
    //Comparação: ==, ===, !=, !==, <, >
    //Lógicos: && (E), || (OU), ! (NÃO) .

let numeros = [1, 2, 3, 4, 5];
let nomes = ["Matheus", "Gustavo", "Ana"];
console.log(nomes[0]); // Exibe "Matheus"
console.log(nomes[1]); // Exibe "Gustavo"

    //aqui iramos pegar um certo id do nosso html imaginario 
    // html <p id="meuParagrafo">Este é o parágrafo que eu quero manipular. </p>
let paragrafo = document.getElementById("meuParagrafo");
paragrafo.innerHTML = "Este texto foi alterado pelo JavaScript!";
    // outro exemplo <p class="paragrafoEspecial">Parágrafo 1</p> <p class="paragrafoEspecial">Parágrafo 2</p>
let paragrafos = document.getElementsByClassName("paragrafoEspecial");
paragrafos[0].innerHTML = "Este é o primeiro parágrafo especial!";





