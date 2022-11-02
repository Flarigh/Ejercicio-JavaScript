var Precio=200;

var Cantidad=document.getElementById("Cantidad");

var categoria = document.getElementById("Categoria");

function ValidarCantidad(){
if (Cantidad.value < 0 || isNaN(Cantidad.value)){
    alert("Valor no válido");
    document.getElementById("Cantidad").value= ""
} 
}

document.getElementById("Cantidad").addEventListener("input", ValidarCantidad);

var descuento;

function TotalAPagar(resultado){
    switch (categoria.value){
        case "Estudiante": descuento=80;
        TotalAPagar
            break;
        case "Trainee": descuento=50;
        TotalAPagar
            break;
        case "Junior": descuento=15;
        TotalAPagar
            break;
        case "Público General": descuento=0;
        TotalAPagar
            break;
    }
    resultado=(Precio*Cantidad.value-(Precio*Cantidad.value*descuento/100));
    document.getElementById("Total").value= "Total a Pagar: $ "+ resultado
}

document.getElementById("resumen").addEventListener("click", TotalAPagar);

