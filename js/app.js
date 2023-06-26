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

///Comienza carrito de compras

let opcion;
let continuar;
let agregar;
let cantidad;

const AGREGAR = 1;
const VACIAR = 2;
const SALIR = 3;

const items = [producto1,producto2,producto3,producto4,producto5,producto6];
const carrito = [];

function insertarItemCarrito (item,marca,cantidad,precio){
    carrito.push({item,marca,cantidad,precio});
}

function vaciarCarrito (){
    carrito.splice(0, carrito.length);
    alert('El carrito está vacío...');
}

alert('¡Bienvenidos al carrito de compras!');
do {
    opcion = parseInt(prompt('Ingrese la opción a realizar: \n 1. Agregar ítem al carrito \n 2. Vaciar el carrito \n 3. Salir del carrito'));
    switch (opcion){
        case AGREGAR:
            let listaItems = items.map((producto,index) => `${index + 1}: ${producto.nombre} ${producto.marca} $: ${producto.precio}`);
            do {
                let menuitems = parseInt(prompt('Elija un producto:' + '\n' +listaItems.join('\n')));
                while (menuitems <= 0 || menuitems > items.length){
                    alert('La opción elegida no es correcta...');
                    menuitems = parseInt(prompt('Elija un producto:' + '\n' +listaItems.join('\n'))); 
                }
                cantidad = parseInt(prompt('Ingrese la cantidad de ítems a agregar'));
                insertarItemCarrito(items[menuitems-1].nombre,items[menuitems-1].marca,cantidad,items[menuitems-1].precio);
                agregar = prompt('¿Desea agregar otro ítem al carrito? Si/No');
                if (agregar.toLowerCase() != 'si'){
                    carrito.forEach((carritoFinal) => {
                        alert(`Producto: ${carritoFinal.item} ${carritoFinal.marca} \nUnidades: ${carritoFinal.cantidad} \nTotal a pagar por producto: $ ${carritoFinal.precio}`);
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
            alert('La opción elegida no es correcta...');  
    }
    continuar = prompt('¿Desea volver al menú del carrito? Si/No');
    if (continuar.toLowerCase() != 'si'){ 
        const totalCarrito = carrito.reduce((total,el) => {return total + el.precio*el.cantidad}, 0);
        alert(`El total del carrito es: $${totalCarrito}`);
        alert('Gracias por elegirnos, hasta pronto!');
    }
}while (continuar.toLowerCase() == 'si');