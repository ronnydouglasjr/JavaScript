function bissexto(){
    var ano = parseInt(prompt("Qual é o ano que você quer verificar?"));

    if ((ano % 4 ==0) && (ano != 100) || (ano % 400 == 0)){
        msg.innerHTML = (`<h2>Analisando o ano de ${ano}... </h2> <p>O ano de ${ano} <strong style="background: rgb(134, 238, 134); color: green;"> É BISSEXTO </strong>&#x2705 </p>`)
    } else {
        msg.innerHTML = (`<h2>Analisando o ano de ${ano}... </h2> <p>O ano de ${ano} <strong style="background: rgb(250, 193, 193); color: red;"> NÃO É BISSEXTO </strong>&#x274C </p>`)
    } 
}