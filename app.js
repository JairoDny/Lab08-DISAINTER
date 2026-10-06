class Producto{
    constructor(nombre, precio, descuento, imagen){
        this.nombre = nombre;
        this.precio = precio;
        this.descuento = descuento;
        this.imagen = imagen;
    }

    calcularPrecioFinal(){
        const descuentoAplicado = this.precio * (this.descuento / 100);
        return this.precio - descuentoAplicado;
    }
}


// paso 3
const producto1 = new Producto(
    "Laptop ASUS", 
    2500, 
    10, 
    "img/laptop.jpg");
const producto2 = new Producto("Mouse Micronics",
    200,
    5,
    "img/mouse.jpg");
const producto3 = new Producto("Teclado Mecánico",
    300,
    8,
    "img/teclado.jpg");

const catalogo = [producto1, producto2, producto3];

// el 4

const contenedor = document.getElementById("contenedor-productos");

catalogo.forEach(producto => {
  // La tarjeta
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("producto");

    const img = document.createElement("img");
    img.src = producto.imagen;
    img.alt = producto.nombre;
    img.style.width = "100%";

    const nombre = document.createElement("h3");
    nombre.textContent = producto.nombre;

    const precio = document.createElement("p");
    precio.textContent = `Precio base: S/. ${producto.precio}`;

    const boton = document.createElement("button");
    boton.textContent = "Aplicar Descuento";

     

    boton.addEventListener("click", () => {
        const precioFinal = producto.calcularPrecioFinal(); 
        precio.textContent = `Precio con descuento: S/. ${precioFinal}`;
  });

  tarjeta.appendChild(img);
  tarjeta.appendChild(nombre);
  tarjeta.appendChild(precio);
  tarjeta.appendChild(boton);

  contenedor.appendChild(tarjeta);
});