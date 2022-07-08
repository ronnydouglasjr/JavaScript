function comprarproduto(){
    var nomedoproduto = prompt("Que produto você esta comprando?");
    var valordoproduto = Number(prompt(`Quanto custa o ${nomedoproduto} que você está comprando?`));
    var valoremdinheiro = Number(prompt(`Qual foi o valor que você deu para pagar ${nomedoproduto}?`));

    var valordotroco = valoremdinheiro - valordoproduto;

    if (valoremdinheiro >= valordoproduto){
        alert(`Você comprou ${nomedoproduto} que custou ${valordoproduto.toLocaleString('pt-br',{ style : 'currency', currency: 'BRL'})}. \nDeu ${valoremdinheiro.toLocaleString("pt-br", {style: 'currency', currency: 'BRL'})} em dinheiro e vai receber ${valordotroco.toLocaleString('pt-br', {style: 'currency' , currency: 'BRL'})} de troco. \nVolte sempre! `)
    } else {
        alert(`Você tentou comprar ${nomedoproduto}, porém o valor é  ${valordoproduto.toLocaleString('pt-br',{ style : 'currency', currency: 'BRL'})}\nE você pagou ${valoremdinheiro.toLocaleString("pt-br", {style: 'currency', currency: 'BRL'})} e ficou faltando  ${valordotroco.toLocaleString('pt-br', {style: 'currency' , currency: 'BRL'})} `)
    }
}