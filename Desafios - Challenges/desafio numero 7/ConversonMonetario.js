var cotacao = Number(prompt("Antes de mais nada. Quanto está a cotação do dólar agora?"));

function converter(){
    var real =  Number(prompt("Quantos R$ você tem na carteira?"));

    var dolar = real / cotacao;

    msg.innerHTML = (`<h2>Você converteu <strong>${real.toLocaleString('pt-br',{style: 'currency' , currency: 'BRL'})}</strong>  em  ${dolar.toLocaleString('pt-br',{style: 'currency' , currency: 'USD'})}  </h2>`)
}