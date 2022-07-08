function verificar(){
    var ValorA = Number(prompt("Qual é o valor de a?"));
    var ValorB = Number(prompt("Qual é o valor de b?"));
    var ValorC = Number(prompt("Qual é o valor de c?"));

    var ResultadoDeBhaskara =  (ValorB ** 2) - 4 * ValorA * ValorC;
    
    msg.innerHTML = (`<h2>Resovendo Bhaskara </h2> <p>A equação atual é <strong>${ValorA}x² + ${ValorB}x + ${ValorC} = 0 </strong> </p> <p>O cálculo realizado será <strong> ∆ = ${ValorB}² - 4 . ${ValorA} . ${ValorC} </strong> </p> <p>O valor Calculado foi <strong  style="background-color: yellow;"> ∆ = ${ResultadoDeBhaskara}</strong> `);
}