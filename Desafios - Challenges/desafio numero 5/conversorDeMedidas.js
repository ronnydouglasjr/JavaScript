function converter(){
    var metros = Number(prompt("digite uma distância em metros(m)"));
    metros.toFixed(2).replace('.', ',')

    var resultadoKM = metros / 1000; 
    var resultadoHectoMetros = metros / 100;
    var resultadodecaMetros= metros / 10;
    var resultadoDeciMetros = metros * 10;
    var resultadoCentimetros = metros * 100;
    var resultadoMilimetros = metros * 1000;

    resultadodecaMetros= parseFloat(resultadodecaMetros)
    msg.innerHTML = (`<h2><strong> A distância de  ${metros.toFixed(2).replace('.', ',')} metros, corresponde a ... </strong> </h2> <p> ${resultadoKM} quilômetros (Km)</p>  <p>${resultadoHectoMetros}  hectômetros(Hm)</p>  <p>${resultadodecaMetros} decâmetros (Dam)</p>  <p> ${ resultadoDeciMetros.toLocaleString('pt-br')} decimetros (dm)</p>  <p>${resultadoCentimetros.toLocaleString('pt-br')} centimetros (cm)</p> <p>${resultadoMilimetros.toLocaleString('pt-br')} milímetros (mm)</p>`)
  //  msg-resposta.innerHTML =(`${resultadoKM} quilômetros (Km) \n${resultadoHectoMetros} hectômetros (Hm) \n${resultadodecaMetros} decâmetros (Dam) \n${resultadoDeciMetros} decimetros (dm) \n${resultadoCentimetros} centimetros (cm) \n${resultadoMilimetros} milímetros (mm)`)
}