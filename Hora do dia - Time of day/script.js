//Função que vai ligar carregar diratamente ao body 
function carregar(){
     //Hora
     var agora = new Date();
     var hora = agora.getHours()
     // Minutos
     var minutosAgora = new Date()
     var minutos = minutosAgora.getMinutes()
    // Paragrafo e imagem
     document.querySelector('div.time').innerHTML = (`<p>Agora são exatamente ${hora}:${minutos} hrs.</p>`);
     var imagem = document.querySelector(".imghora");
     if (hora <= 12){
            // Manhã
         document.body.style.background = "rgba(4, 94, 211, 0.741)";
         imagem.src = 'manha.jpg'
        
     } else if(hora >= 13 && hora <= 18){
        // Tarde
         document.body.style.background = "rgba(1, 0, 5, 0.412)";
         imagem.src =  'tarde.png';
 
     }  else {
        // Noite
         document.body.style.background = "rgba(0, 0, 22, 0.864)";
         imagem.src = 'noite.jpg';
     }
 }
