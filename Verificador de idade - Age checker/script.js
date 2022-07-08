function resultado(){
    // Ano atual
    var ano = new Date();
    var AnoAtual = ano.getFullYear();
    // Ano de nascimento
    var AnoDeNascimento = document.getElementById('AnoDeNascimento');
    document.getElementById('res');

    if(AnoDeNascimento.value.length == 0 || Number(AnoDeNascimento.value) > AnoAtual){
        alert('[ERRO] por gentileza verifique o seus dados!');
    } else {
        var sexo = document.getElementsByName('texsex');
        // Calculando idade!
        var idade = AnoAtual - AnoDeNascimento.value;
        // imagem
        var img = document.querySelector('#imagem');
        if(sexo[0].checked){
            sexo = 'Homem'
            if (idade >= 0 && idade < 11){
                img.src = 'foto-crianca-homem-redondo.png'
            } else if (idade < 17){
                img.src = 'foto-jovem-redondo.png'
            } else if (idade < 50){
                img.src = 'adulto-homem-redondo.png'
            } else {
                img.src = 'foto-idoso-homem.redondo.png'
            }
        } else if(sexo[1].checked){
            sexo = 'Mulher'
            if (idade >= 0 && idade < 11){
                img.src = 'foto-crianca-mulher-redondo.png'
            }  else if (idade < 17){
                img.src = 'foto-jovem-mulher-redondo.png'
            }  else if (idade < 50){
                img.src = 'foto-adulto-mulher-redendo.png'
            } else{
                img.src = 'foto-mulher.redondo.png'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Dectamos ${sexo} com  ${idade} anos.</p>`
        
    }
}