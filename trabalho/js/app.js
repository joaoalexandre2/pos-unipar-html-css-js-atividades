// https://www.w3schools.com/html/html5_draganddrop.asp

//var finalValue = 0;
//var totalItens = 0;


function denyDrop(ev) {
    ev.stopPropagation();
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function endDrag(ev) {
    ev.target

    var total=0;
    var total_qtde=0; 
var totalElement = $("#total-itens");
$("#carrinho").find(".produto").each(function( index ) {
    var qtde=$("#checkout").find("input[name='qtde']").val();
    var valor=$("#checkout").find("input[name='valor']").val();
    var sub_total=qtde*valor;
    total_qtde=total_qtde+parseInt(qtde);
    total=total+sub_total;
    console.log(qtde+"X"+valor+"="+sub_total+"  "+total);
});
var total_formatado =  "R$ " + total.toFixed(3).replace(".",",");
$("#valor-total").html(total_formatado);
$("#total-itens").html(total_qtde);
  

    // Está dentro do carrinho?
    // Sim
    // Liberar botão de preço
    //Liberar botão de quantidade

    // Não
    // Bloquear botão de preço
    //bloquear botão de quantidade
}



//<div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>

//<img id="drag1" src="img_logo.gif" draggable="true" ondragstart="drag(event)" width="336" height="69"></img>

