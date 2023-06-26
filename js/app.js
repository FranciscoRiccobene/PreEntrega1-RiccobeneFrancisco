class Producto {
    nombre;
    marca;
    precio;

    constructor (nombre,marca,precio) {
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
    }
}

const producto1 = new Producto ('Alfajor', 'Terrabusi', 250);
const producto2 = new Producto ('Gaseosa', 'Coca Cola', 350);
const producto3 = new Producto ('Gaseosa', 'Pepsi', 320);
const producto4 = new Producto ('Chocolate', 'Cadbury', 560);
const producto5 = new Producto ('Alfajor', 'Jorgito', 300);
const producto6 = new Producto ('Detergente', 'Cif', 630);

const items = [producto1,producto2,producto3,producto4,producto5,producto6];

///Comienza carrito de compras

let opcion;
let continuar;
let agregar;

const AGREGAR = 1;
const VACIAR = 2;
const SALIR = 3;

const carrito = [];

function insertarItemCarrito (item,marca,cantidad,precio){
    carrito.push({item,marca,cantidad,precio});
}

function vaciarCarrito (){
    carrito.splice(0, carrito.length);
    alert("El carrito está vacío...");
}

alert('¡Bienvenidos al carrito de compras!');
do {
    opcion = parseInt(prompt('Ingrese la opción a realizar: \n 1. Agregar ítem al carrito \n 2. Vaciar el carrito \n 3. Salir del carrito'));
    switch (opcion){
        case AGREGAR:
            const ITEM1 = 1;
            const ITEM2 = 2;
            const ITEM3 = 3;
            const ITEM4 = 4;
            const ITEM5 = 5;
            const ITEM6 = 6;
            let item;
            let marca;
            let cantidad;
            let precio;
            let listaItems = items.map ((producto) => producto.nombre+ ' ' +producto.marca+ ' $: ' + producto.precio);
            do {
                const MENUITEMS = parseInt(prompt('Elija un producto del 1 al 6: ' + '\n' +listaItems.join('\n')));
                switch (MENUITEMS){
                    case ITEM1:
                        item = producto1.nombre;
                        marca = producto1.marca;
                        cantidad = parseInt(prompt("Ingrese la cantidad de ítems a agregar"));
                        precio = producto1.precio;
                        insertarItemCarrito(item,marca,cantidad,precio);
                        break;
                    case ITEM2:
                        item = producto2.nombre;
                        marca = producto2.marca;
                        cantidad = parseInt(prompt("Ingrese la cantidad de ítems a agregar"));
                        precio = producto2.precio;
                        insertarItemCarrito(item,marca,cantidad,precio);
                        break;
                    case ITEM3:
                        item = producto3.nombre;
                        marca = producto3.marca;
                        cantidad = parseInt(prompt("Ingrese la cantidad de ítems a agregar"));
                        precio = producto3.precio;
                        insertarItemCarrito(item,marca,cantidad,precio);
                        break;
                    case ITEM4:
                        item = producto4.nombre;
                        marca = producto4.marca;
                        cantidad = parseInt(prompt("Ingrese la cantidad de ítems a agregar"));
                        precio = producto4.precio;
                        insertarItemCarrito(item,marca,cantidad,precio);
                        break;
                    case ITEM5:
                        item = producto5.nombre;
                        marca = producto5.marca;
                        cantidad = parseInt(prompt("Ingrese la cantidad de ítems a agregar"));
                        precio = producto5.precio;
                        insertarItemCarrito(item,marca,cantidad,precio);
                        break;
                    case ITEM6:
                        item = producto6.nombre;
                        marca = producto6.marca;
                        cantidad = parseInt(prompt("Ingrese la cantidad de ítems a agregar"));
                        precio = producto6.precio;
                        insertarItemCarrito(item,marca,cantidad,precio);
                        break;
                    default:
                        alert('La opción elegida no es la correcta...');                 
                }
                agregar = prompt("¿Desea agregar otro ítem al carrito? Si/No");
                if (agregar.toLowerCase() != 'si'){
                    carrito.forEach((carritoFinal) => {
                        alert(`Producto: ${carritoFinal.item} ${carritoFinal.marca} \nUnidades: ${carritoFinal.cantidad} \nTotal a pagar por producto: $${carritoFinal.precio}`);
                    });
                }
            }while (agregar.toLowerCase () == 'si');
            break;
        case VACIAR:
            vaciarCarrito();
            console.log(carrito);
            break;
        case SALIR:
            break;
        default:
            alert("La opción elegida no es correcta...");  
    }
    continuar = prompt('¿Desea volver al menú del carrito? Si/No');
    if (continuar.toLowerCase() != 'si'){ 
        const totalCarrito = carrito.reduce((total,el) => {return total + el.precio*el.cantidad}, 0);
        alert(`El total del carrito es: $${totalCarrito}`);
        alert('Gracias por elegirnos, hasta pronto!');
    }
}while (continuar.toLowerCase() == 'si');

