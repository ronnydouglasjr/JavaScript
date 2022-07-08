function converter(){
    var NomeDoFuncionario = prompt("Qual é o nome do funcionário?");
    var SalarioAtual = Number(prompt(`Qual é o salário de ${NomeDoFuncionario}?`));
    var PorcentagemSalarial = Number(prompt(`O salário de ${NomeDoFuncionario} vai ser reajustado em qual porcentagem?`))

    var AumentoDaPorcentagem = (SalarioAtual*PorcentagemSalarial)/100
    var ReajusteSalarial = SalarioAtual +  AumentoDaPorcentagem;


    msg.innerHTML = (`<h2>${NomeDoFuncionario} recebeu um aumento salarial</h2> <p>O salário atual era ${SalarioAtual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}. </p> <p>Com um aumento de ${PorcentagemSalarial}%, o salário vai aumentar ${AumentoDaPorcentagem.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} no próximo mês. </p> <p>E a partir dai, ${NomeDoFuncionario} vai passar a ganhar ${ReajusteSalarial.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}.</p>`)


}