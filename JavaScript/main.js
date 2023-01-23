const productos = [
  {
    id: 1,
    nombre: "BOUQUET DE ROSAS",
    precio: 920,
    img: "https://thecandleshop.com.ar/public/assets//1064/gt_1643912838A02BR_a.jpg",
  },
  {
    id: 2,
    nombre: "HIGO DE ORIENTE",
    precio: 920,
    img: "https://thecandleshop.com.ar/public/assets//17/gt_1643912922A02HI_a.jpg",
  },
  {
    id: 3,
    nombre: "LAVANDA MENTA",
    precio: 920,
    img: "https://thecandleshop.com.ar/public/assets//404/gt_1621523896A02LM_b.jpg",
  },
  {
    id: 4,
    nombre: "SANDIA PEPINO",
    precio: 920,
    img: "https://thecandleshop.com.ar/public/assets//21/gt_1621523302A02P_b.jpg",
  },
  {
    id: 1,
    nombre: "BOUQUET DE ROSAS",
    precio: 920,
    img: "https://thecandleshop.com.ar/public/assets//1064/gt_1643912838A02BR_a.jpg",
  },
  {
    id: 2,
    nombre: "HIGO DE ORIENTE",
    precio: 920,
    img: "https://thecandleshop.com.ar/public/assets//17/gt_1643912922A02HI_a.jpg",
  },
  {
    id: 3,
    nombre: "LAVANDA MENTA",
    precio: 920,
    img: "https://thecandleshop.com.ar/public/assets//404/gt_1621523896A02LM_b.jpg",
  },
  {
    id: 4,
    nombre: "SANDIA PEPINO",
    precio: 920,
    img: "https://thecandleshop.com.ar/public/assets//21/gt_1621523302A02P_b.jpg",
  },
];

const nuevasFragancias = [
  {
    fragancia: "PEPINO",
    imagen: "./imagenes/nuevas fragancias/1.jpg",
  },
  {
    fragancia: "CITRUS",
    imagen: "./imagenes/nuevas fragancias/2.jpg",
  },
  {
    fragancia: "BAMBOO",
    imagen: "./imagenes/nuevas fragancias/3.jpg",
  },
  {
    fragancia: "CEDRO",
    imagen: "./imagenes/nuevas fragancias/4.jpg",
  },
  {
    fragancia: "LIMA",
    imagen: "./imagenes/nuevas fragancias/5.jpg",
  },
];


//CREACION DE CARDS NUEVAS FRAGANCIAS INDEX

const nuevas = document.getElementById("nuevasFragancias");

nuevasFragancias.forEach((frag) => {
  const { fragancia, imagen } = frag;
  if (nuevas != null) {
    nuevas.innerHTML +=
      `<div data-aos="flip-left" data-aos-duration="1000" class="card mt-2 fraganciasCards" style="width: 15rem;">
              <img class="card-img-top " src="${imagen}" alt="nueva fragancia">
              <div class="card-body">
              <h5 class="card-title">${fragancia}</h5>
  
              </div>
          </div>
      `;
  }
});



//CREACION DE CARDS POR PRODUCTO
let contenedor = document.getElementById("contenidoTienda");
let carrito = [];
let verCarrito = document.getElementById("verCarrito");

productos.forEach((prod) => {

  const {id, nombre, precio, img } = prod;

  let contenido = document.createElement("div");
  contenido.className = "card";
  
  if (contenedor != null) {
    contenido.innerHTML =
    `<img class="card-img-top " src="${img}" alt="Card image cap">
      <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">$ ${precio}</p>
    `;

    contenedor.append(contenido);

    //BOTON PARA AGREGAR AL CARRITO

    let comprar = document.createElement("button");
    comprar.innerHTML = "Agregar al carrito";
    comprar.className = "buttonIndex buttonTienda";
  
    contenido.append(comprar);

      //AGREGAR AL CARRITO
    comprar.addEventListener("click", () => {
      carrito.push({
        id : prod.id,
        img: prod.img,
        nombre: prod.nombre,
        precio: prod.precio
      });
      console.log(carrito);
    });
  }  
});

const modalContainer = document.getElementById("modalContainer")

verCarrito.addEventListener("click", () => {
    const modalHeader = document.createElement("div");
    modalHeader.className = "modalHeader";
    modalHeader.innerHTML = `
      <h2 class = "tituloModal"> Mi carrito </h2> 
      <hr>
    `;
    modalContainer.append(modalHeader);

    const modalCerrar = document.createElement("div");
    modalCerrar.innerHTML =
    `
    <img class="cerrar" src="../imagenes/cerrar.png" alt="cerrar">
    `;

    modalContainer.append(modalCerrar);

})