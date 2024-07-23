var monto = 0;
var descripcion = "";
var indice = 0;
var valorh;

function acumularmonto(num) {
    if (num == 1) {
        descripcion = "Hamburguesa Simple";
        monto = monto + 1000;
        valorh = 1000
    }
    if (num == 2) {
        descripcion = "Hamburguesa Doble";
        monto = monto + 1500;
        valorh = 1500;
    }
    if (num == 3) {
        descripcion = "Hamburguesa Triple";
        monto = monto + 2000;
        valorh = 2000;
    }
    indice = indice + 1;
    var detalle = document.getElementById("detalle");
    var eltr = document.createElement("tr");
    eltr.id = "tr" + indice;
    detalle.appendChild(eltr);

    var fila = document.getElementById("tr" + indice);

    var eltd = document.createElement("td");
    eltd.innerHTML = descripcion
    fila.appendChild(eltd);

    var eltd2 = document.createElement("td");
    eltd2.innerHTML = valorh + "$";
    fila.appendChild(eltd2);

    function calcular(num) {
        if (num === 1) {
            let tarjeta = document.getElementById("mediopago");
            if (tarjeta.checked == true) {
                monto = monto + (monto * (30 / 100))
            }
            
        }
    }
    var totalgral = document.getElementById("total");
    totalgral.innerHTML = "Total = $" + monto;
}