<?php
echo '
<div id="container">
    <h2>Factura</h2>

    <form action="" onchange="calculo()">
        <div id="section1">
            <div id="datosEmisor">
                <input id="dir" type="text" placeholder="Direcion">
                <input id="ciu" type="text" placeholder="Ciudad">
                <input id="tel" type="text" placeholder="Telefono">
            </div>
            <div id="datosFactura">
                <input id="fecha" type="date">
                <input id="numFact" type="text"  placeholder="Nº factura">
                <input id="numPedi" type="text" placeholder="Nº pedido">
            </div>
        </div>

        <div id="section2">
            <div id="datosCobro"></div>
        </div>

        <div id="section3">
            <div id="headSection3">
                <label for="txtCant">Cantdidad</label>
                <label for="">Descripción</label>
                <label for="">Precio Unitario</label>
                <label for="">Importe</label>
            </div>
            <div id="rows">
                <div class="row">
                    <input type="number" class="txtCant">
                    <input type="text" class="txtDesc">
                    <input type="number" class="txtUnit">
                    <input type="number" class="txtImpo">
                </div>
            </div>
            <div id="subTotal">
                <label for="txtSubTotal">Subtotal</label>
                <input id="txtSubTotal" type="number">
            </div>
            <input id="btnadd" class="boton" onclick="addrow()" type="button" value="Añadir">
            <input id="btnless" class="boton" onclick="lessrow()" type="button" value="Eliminar">

        </div>
        
        <div id="section4">
                 <input id="observaciones" type="text" placeholder="Observaciones">
                 <label for="total">Total</label>
                 <input id="total" type="number">
        </div>
    </form>
</div>
';
?>
