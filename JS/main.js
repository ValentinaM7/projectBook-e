const categories = document.getElementsByClassName("categories-btn");
const aside = document.getElementById("myAside");
const cerrarBtn = document.getElementById("close");
const openBtn = document.getElementById("openBtn");
const detailsaside = document.getElementById("aside-detalles");
const carroFisico = document.getElementById("carrito-fisico");
const listadeCompra = document.getElementById("lista-compra");
const cerrarcarro = document.getElementById("cerrar-carrito");
const listacarro = document.getElementById("list-cart");
const categorias = document.getElementById("lista-categorias");
const totalPagar = document.getElementById("total");
const pagarlibrosfin = document.getElementById("pagarlibros");
const contenedorLibros = document.getElementById("contenedor-libros");

openBtn.addEventListener("click", () => {
  aside.classList.add("show");
});

cerrarBtn.addEventListener("click", () => {
  aside.classList.remove("show");
});

carroFisico.addEventListener("click", () => {
  listadeCompra.classList.add("show");
});

cerrarcarro.addEventListener("click", () => {
  listadeCompra.classList.remove("show");
});

let carrito = [];

const books = [];

const getCategoriasUnicas = () => {
  const categoriasLibros = books.map((book) => book.category); //Traemos todas las categorias a una nueva lista array

  let setDeElementos = new Set(categoriasLibros); //Hacemos el set con categorias que no sean repetidas

  const ArrayCategorias = Array.from(setDeElementos); //las transformamos en array

  categorias.innerHTML = ""; //limpiamos y despues renderizamos

  ArrayCategorias.forEach((cat) => {
    categorias.innerHTML += `
    <li class="cat-item">
      <button class="categories-btn" data-cat="${cat}">${cat}</button>
    </li>
  `;
  });

  const BotonesCat = document.querySelectorAll(".categories-btn");// Selecciono TODOS los botones de categoría

  BotonesCat.forEach((btn) => { // A cada botón le agrego su listener
    btn.addEventListener("click", () => {
      const categoriaSeleccionada = btn.dataset.cat; // data-cat es donde el botón guarda escondida su categoría, una mochilita
      showBooksOnlyCat(categoriaSeleccionada);
    });
  });

  
  const showBooksOnlyCat = (bookCat) => { // Función para mostrar los libros filtrados
    const librosFiltrados = books.filter((b) => b.category === bookCat);

     contenedorLibros.innerHTML = ""; // limpio antes de imprimir

    librosFiltrados.forEach((book) => {
      contenedorLibros.innerHTML += `
      <div class="libro-picandtext" id=${book.id} onclick="showBookDetails(${book.id})">
        <img src="${book.image}" alt="${book.title}">
        <div class="libro-detalles">
          <h3>${book.title}</h3>
          <p class="author">${book.author}</p>
          <p class="pages">${book.pages} pages</p>
          <p class="price">$${book.price}</p>
        </div>
      </div>
    `;
    });
  };
};

const templateLibros = () => {
  books
    .filter((book) => book.price < 11)
    .forEach((book) => {
      contenedorLibros.innerHTML += `<div class="libro-picandtext" id=${book.id} onclick="showBookDetails(${book.id})">
                            <img src =${book.image} alt="${book.title} ">
                            <div class="libro-detalles">
                                <h3>${book.title} </h3>
                                <p class="author">${book.author} </p>
                                <p class="pages">${book.pages} pages</p>
                                <p class="price"> $${book.price} </p></p>
                            </div>
                        </div>`;
    });
};

const calculadoraTotal = () => {
    let total = carrito.reduce((acc, el) => {
      const soloNumero =parseFloat(el.price)  
      return (acc += soloNumero)
    }, 0)

    return total
  }


const agregadoraDeLibros = () => {
  listacarro.innerHTML = " ";
  carrito.forEach((book) => {
    listacarro.innerHTML += ` <div class="casilla" id=${book.id}>
              <h3>${book.title}</h3>
              <p class="author">${book.author}</p>
              <p class="price">$${book.price}</p>
              <button class="remove">-</button>
                </div>`;
  })

  let calculoTotal = calculadoraTotal()

  totalPagar.innerHTML = `<p class="total">Total: $ ${calculoTotal}</p>`

};
  
  // const borrar = document.querySelectorAll ('.remove');
  //   borrar.forEach((botonborrar) =>{
  //     botonborrar.addEventListener("click", (e) => {
  //       const ElementoABorrar = e.target.ParentElement;
  //       ElementoABorrar.toggle();   
  //     });
  //   });
  


const showBookDetails = (bookId) => {
  const book = books.find((b) => b.id === bookId); // Encuentra el libro con el id correspondiente

  const asideConBoton = `<div class="book-details" id=${book.id}>
              <img src="${book.image}" alt="${book.title}">
              <h3>${book.title}</h3>
              <p class="author">${book.author}</p>
              <p class="pages">${book.pages} pages</p>
              <p class="category">${book.category}</p>
              <p class="price">$${book.price}</p>
              <div class="cta">
                  <button class="add">Add to cart</button>
                  <button class="buynow" id="ya">Buy now</button>
              </div>
          </div>`;

  detailsaside.innerHTML = asideConBoton;

  setTimeout(() => {
    //ejecutamos las dos funciones juntas ya que innerhtml es sincrono en codigo

    const botonAdd = document.getElementsByClassName("add");

    const arrayBotonesAdd = Array.from(botonAdd);

    arrayBotonesAdd.forEach((boton) => {
      boton.addEventListener("click", (event) => {
        let id = event.target.parentNode.parentNode.id;

        let book = books.find((b) => b.id === bookId);
        carrito.push({ ...book });
        agregadoraDeLibros();
      });
    });
  });

  const compra = document.getElementById("ya");
  compra.addEventListener("click", async () => {
    Swal.fire({
      title: "Type your credit card details",
      html: `
    <input type="text" 
           id="idInput" 
           pattern="[0-9]{12}">
  `,
      showCancelButton: true,
      confirmButtonText: "Save",
      confirmButtonColor: "#2FC2AD",
      cancelButtonText: "Cancel",
      cancelButtonColor: "#0e3d36",
      preConfirm: () => {
        const input = document.getElementById("idInput");
        if (!input.value || !input.validity.valid) {
          Swal.showValidationMessage("Please 12 use numbers");
          return false; // Evita que se cierre el modal si no es válido
        }
        return input.value;
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "You bought a new book!",
          text: "We will send you an email with the tracking number",
          icon: "success",
          confirmButtonText: "Great!",
          confirmButtonColor: "#2FC2AD",
        });
      }
    });
  });
};
pagarlibrosfin.addEventListener("click", () => {
  Swal.fire({
      title: "Type your credit card details",
      html: `
    <input type="text" 
           id="idInput" 
           pattern="[0-9]{12}">
  `,
      showCancelButton: true,
      confirmButtonText: "Save",
      confirmButtonColor: "#2FC2AD",
      cancelButtonText: "Cancel",
      cancelButtonColor: "#0e3d36",
      preConfirm: () => {
        const input = document.getElementById("idInput");
        if (!input.value || !input.validity.valid) {
          Swal.showValidationMessage("Please 12 use numbers");
          return false; // Evita que se cierre el modal si no es válido
        }
        return input.value;
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "You bought a new book!",
          text: "We will send you an email with the tracking number",
          icon: "success",
          confirmButtonText: "Great!",
          confirmButtonColor: "#2FC2AD",
        });}
  carrito = []
  agregadoraDeLibros()
})});


document.addEventListener("DOMContentLoaded", async () => {
    try{
        let res = await fetch("json/object.json");
        let data = await res.json();

        data.forEach(item => {
            books.push(item)
        });

        console.log(data)
        templateLibros();
        getCategoriasUnicas();
    }
    catch (error){
        console.error(error);
    }
});

