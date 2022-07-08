function converter(){
    var produto = prompt("Qual é o produto que você esta comprando?");
    var ValorDoProduto = Number(prompt(`Qual é o preço de ${produto}?`))

    var ValorDoDesconto = ValorDoProduto / 10; 
    var ValorComDesconto = ValorDoProduto - ValorDoDesconto;

    msg.innerHTML = (`<h2>Calculando desconto de 10% para ${produto} </h2> <p>O preço original era ${ValorDoProduto.toLocaleString('pt-br',{style: 'currency' , currency: 'BRL'})} </p> <p>Você acaba de ganhar ${ValorDoDesconto.toLocaleString('pt-br',{style: 'currency' , currency: 'BRL'})} de desconto (-10%)</p> <p>No fim, você vai pagar ${ValorComDesconto.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} no produto ${produto} </p> `)
}