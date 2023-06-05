let total = 0;
let continuar;
let opcion;
let agregar;
let producto1 = 25;
let producto2 = 50;
let producto3 = 100;

const AGREGAR = 1;
const MOSTRAR = 2;
const VACIAR = 3;
const SALIR = 4;

const agregarItem = function(totalCarrito, precio, cantidad) {
    return totalCarrito + precio * cantidad;
}

const mostrarTotalCarrito = function(totalCarrito){
    console.log("Total del carrito con el nuevo ítem añadido: " + totalCarrito);
}

const vaciarCarrito = function() {
    console.log("El carrito está vacío...");
    return 0;
}

alert("¡Bienvenidos al carrito de compras!");
do{
    opcion = parseInt(prompt("Ingrese la opción a realizar: \n 1. Agregar ítem al carrito \n 2. Mostrar total del carrito \n 3. Vaciar el carrito \n 4. Salir del carrito"));
    switch (opcion){
        case AGREGAR:
            const JABON = 1;
            const GASEOSA = 2;
            const ALFAJOR = 3;
            do{
                let precio;
                let cantidad;
                const MENUITEMS = parseInt(prompt("Ingrese el producto que desea comprar:" +"\n"+ "1. Jabón: $" + producto1 +"\n"+ "2. Gaseosa: $" + producto2 +"\n"+ "3. Alfajor: $" + producto3));
                switch (MENUITEMS){
                    case JABON:
                        precio = producto1;
                        cantidad = parseInt(prompt("Ingrese la cantidad de ítems a agregar"));
                        agregarItem(total, precio, cantidad);
                        total = agregarItem(total, precio, cantidad);
                        mostrarTotalCarrito(total);
                        break;
                    case GASEOSA:
                        precio = producto2;
                        cantidad = parseInt(prompt("Ingrese la cantidad de ítems a agregar"));
                        agregarItem(total, precio, cantidad);
                        total = agregarItem(total, precio, cantidad);
                        mostrarTotalCarrito(total);
                        break;
                    case ALFAJOR:
                        precio = producto3;
                        cantidad = parseInt(prompt("Ingrese la cantidad de ítems a agregar"));
                        agregarItem(total, precio, cantidad);
                        total = agregarItem(total, precio, cantidad);
                        mostrarTotalCarrito(total);
                        break;
                    default:
                        alert("La opción elegida no es correcta...");           
                }
                agregar = prompt("¿Desea agregar otro ítem al carrito? Si/No");
            }while (agregar.toLowerCase() == "si");
            break;
        case MOSTRAR:
            alert("El total del carrito es: " + total);
            break;
        case VACIAR:
            total = vaciarCarrito(); 
            break;
        case SALIR:
            break;
        default:
            alert("La opción elegida no es correcta...");          
    }
    continuar = prompt("¿Desea volver al menú del carrito? Si/No");
}while (continuar.toLowerCase() == "si");