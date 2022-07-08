function contar(){
    // Dados do inicio // 
    var inicio = document.getElementById('inicio');

    // Dados do fim // 
    var fim = document.getElementById('fim');

    // Dados do passo // 
    var passo = document.getElementById('passo');

    // Dados do ID HTML // 
    var res = document.getElementById('resultado');

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 || passo.value == 0){
        alert("[ERRO]. Por gentileza verifique os dados!")
        res.innerHTML = 'Impossivel contar'
    } else {
        // Transformando o texto do input em numeros 
        inicio = Number(inicio.value);
        fim = Number(fim.value);
        passo = Number(passo.value);

        res.innerHTML = 'Contando: ';
        // Condições crescente 
        if(fim > inicio){
            for(var i = inicio; i <= fim; i += passo){
                res.innerHTML += `${i} &#x1F449 `
            }    
            // Condições contagem regressiva
        } else if (inicio > fim){
            for(var  i = inicio; i >= fim; i -= passo){
                res.innerHTML += `${i} &#x1F449 `
            } 
        }
        res.innerHTML += `&#x1F3C1 `
    }
}
