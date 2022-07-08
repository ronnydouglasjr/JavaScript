function calcular(){
    var pais = document.getElementById("txt");
    var resultado = (pais.value);

    if(resultado == "brasil"){
        res.innerHTML = `<h2>Você é Brasileiro! <strong style="background: rgb(130, 223, 130); color: green;"> ${resultado[0].toLocaleUpperCase() + resultado.substr(1)} </strong> &#x1F49A&#X1F49B </h2>`
    } else {
        res.innerHTML += `<h2> Você é Estrangeiro!<strong style="background-color: rgb(232, 143, 143); color: red;"> ${resultado} </strong>&#x1F30E </h2>`
    }
}