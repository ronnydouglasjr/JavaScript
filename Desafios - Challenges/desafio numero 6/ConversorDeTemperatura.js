function converter(){
    var celcius = Number(prompt("Digite a temperatura em ºC (Celcius)"));
    
    var CelciusForFahrenheit = (celcius*1.8)+32;
    var CelciusForKelvin = celcius+273.15;

    msg.innerHTML = (`<h2>A temperatura de ${celcius.toFixed(1).replace('.', ',')} ºC (Celcius)</h2> <p>${CelciusForKelvin.toFixed(2).replace('.',',')}ºK (Kenvin) </p> <p>${CelciusForFahrenheit.toLocaleString('pt-br')}ºF (Fahrenheit) </p> `)
   
    
}