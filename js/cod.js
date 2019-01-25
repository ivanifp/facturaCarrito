
function addrow(){
    
    console.log("añadido");
    let rows = document.getElementById("rows");
    if(document.getElementsByClassName("row").length<15){
        let row = document.createElement("div");
        row.setAttribute("class","row");

        let inpu1 = document.createElement("input");
        inpu1.setAttribute("type","number");
        inpu1.setAttribute("class","txtCant");
        row.appendChild(inpu1);    
        let inpu2 = document.createElement("input");
        inpu2.setAttribute("type","text");
        inpu2.setAttribute("class","txtDesc");
        row.appendChild(inpu2);
        let inpu3 = document.createElement("input");
        inpu3.setAttribute("type","number");
        inpu3.setAttribute("class","txtUnit");
        row.appendChild(inpu3);
        let inpu4 = document.createElement("input");
        inpu4.setAttribute("type","number");
        inpu4.setAttribute("class","txtImpo");
        row.appendChild(inpu4);

        rows.appendChild(row);
    }

    
}

function calculo(){
    console.log("calculo");
    
    const cantidad = document.getElementsByClassName("txtCant");
    const unitario = document.getElementsByClassName("txtUnit");
    let importe = document.getElementsByClassName("txtImpo");
    
    let subtotal = 0;
    
    for(i=0; i<cantidad.length; i++){
        importe[i].value = cantidad[i].value * unitario[i].value;
        subtotal += importe[i].value *1;
    }
    
    let txtSubTotal = document.getElementById("txtSubTotal");
    txtSubTotal.value = subtotal;
    
    let totales = document.getElementById("total");
    totales.value = subtotal * 1.21;
    console.log(subtotal);
}

function lessrow(){
    
    console.log("eliminado");
    let rows = document.getElementById("rows");
    let row = document.getElementsByClassName("row");
    if(row.length >0){rows.removeChild(rows.lastElementChild);};
    calculo();
}