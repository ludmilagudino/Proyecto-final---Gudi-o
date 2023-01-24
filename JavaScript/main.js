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

//ARRAY CARRITO
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

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
      guardarCarrito();
    });
  }  
});


//CREACION DE MODAL
const modalContainer = document.getElementById("modalContainer")


const mostrarCarrito = () => {
  modalContainer.innerHTML = "";
  modalContainer.style.display = "flex"
    const modalHeader = document.createElement("div");
    modalHeader.className = "modalHeader";
    modalHeader.innerHTML = `
    <div>
      <h2 class = "tituloModal"> Mi carrito </h2> 
      <hr>
      </div>
    `;
    modalContainer.append(modalHeader);

    const modalCerrar = document.createElement("div");
    modalCerrar.innerHTML =
    `
    
    <img class="cerrar" src="../imagenes/cerrar.png" alt="cerrar">
    `;
    modalHeader.append(modalCerrar);

    modalCerrar.addEventListener("click", () =>{
      modalContainer.style.display = "none";
    })

    carrito.forEach((compra) => {
      const {nombre, precio, img } = compra;
      let carritoCompras = document.createElement("div");
      carritoCompras.innerHTML = `
        <div class = "carritoContenido">
        <img class="imgCarrito" src="${img}" alt="" >
        <h4>${nombre}</h4>
        <p>$${precio}</p>
        </div>
      `;

      modalContainer.append(carritoCompras);

      let eliminar = document.createElement("div");
      eliminar.className = "eliminarProducto";
      eliminar.innerHTML = `
      <hr class = "hrCarrito">
      <img class="eliminar" src="../imagenes/cross-icon.png" alt="eliminar"> 
      `
      carritoCompras.append(eliminar);

      eliminar.addEventListener("click",eliminarProducto)
    });

    const total = carrito.reduce((acc, comprado) => acc + comprado.precio, 0);

    const totalComprado = document.createElement("div")
    totalComprado.className = "totalComprado"
    totalComprado.innerHTML = `
    <p> Total a pagar </p>
    <p> $${total} </p>
    `
    modalContainer.append(totalComprado);

  }


  //MOSTRAR CARRITO
  verCarrito.addEventListener("click", mostrarCarrito);


  //ELIMINAR PRODUCTOS DEL CARRITO
  const eliminarProducto = () => {
    const buscarId = carrito.find((elemento) => elemento.id);

    carrito = carrito.filter((carritoId) => {
      return carritoId !== buscarId;
    });

    guardarCarrito();
    mostrarCarrito();
  };

//GUARDAR CARRITO EN LOCAL STORAGE
const guardarCarrito = () => {
  localStorage.setItem("carrito",JSON.stringify(carrito));
};

//RECUPERAR CARRITO LOCAL STORAGE



  