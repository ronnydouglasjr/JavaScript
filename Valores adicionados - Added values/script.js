let valor = document.getElementById('numero');
let tabela = document.getElementById('tabela');
let res = document.getElementById('res');
let vetores = [];


function Enumero(n){
    if(Number(n)> 0 && Number(n) <= 100){
        return true
    } else{
       return false 
    }    
}

function Lista(n , l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function  adicionar(){
    if(Enumero(valor.value) && !Lista(valor.value, vetores)){
        vetores.push(Number(valor.value))
        let AdicionarNumero = document.createElement('option');
        AdicionarNumero.innerHTML = (`Valor ${valor.value} adiocionado`)
        tabela.appendChild(AdicionarNumero);
        res.innerHTML = ''
    } else {
        alert('[ERRO]. Valor já digitado ou invalido')
    }
    valor.value = ''
    valor.focus()
}

function finalizar(){
    if(vetores.length == 0){
        alert('Array vazio')
    } else {
        let total = vetores.length;
        let maior = vetores[0]
        let menor = vetores[0]
        let soma =  0
        

        for(pos in vetores){
            soma += vetores[pos] 
            if(vetores[pos] > maior){
                maior = vetores[pos]
            } else if (vetores[pos] < menor){
                menor = vetores[pos]
            }
        }
        let media = soma / total

        res.innerHTML += `<p>Ao todo, temos <strong>${total} </strong> números cadastrado </p>`
        res.innerHTML += `<p>O Maior valor informado foi <strong> ${maior}</strong></p>`
        res.innerHTML += `<p>O menor valor informado foi <strong>${menor} </strong> </p>`
        res.innerHTML += `<p>Somando todos os valores <strong>${soma}</strong> </p>`
        res.innerHTML += `<p>A média do valores digitados é <strong>${media}</strong></p>`
    }
}
