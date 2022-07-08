function tabuada(){
    var txtnumber = document.getElementById('numero');
    if(txtnumber.value.length == 0){
        alert('[ERRO]. Digite um numero!')
    } else {
        //var indice = Number(txtnumber.value);
        var resultado = document.getElementById('res');
        var indice = Number(txtnumber.value)
        resultado.innerHTML = ''
        for(var i = 1; i <= 10; i ++){
            var item = document.createElement('option');
            item.innerHTML += (`${i} X ${indice} = ${i*indice}`)  
            resultado.appendChild(item);
        }
    } 
}