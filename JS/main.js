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

const books = [
  {
    id: 1,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    pages: 432,
    category: "Romance",
    price: 12.99,
    image: "https://covers.openlibrary.org/b/id/8225261-L.jpg",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    pages: 328,
    category: "Sci-Fi",
    price: 14.5,
    image: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
  },
  {
    id: 3,
    title: "Dracula",
    author: "Bram Stoker",
    pages: 418,
    category: "Horror",
    price: 11.75,
    image: "https://covers.openlibrary.org/b/id/8231992-L.jpg",
  },
  {
    id: 4,
    title: "Frankenstein",
    author: "Mary Shelley",
    pages: 280,
    category: "Horror",
    price: 10.99,
    image: "https://covers.openlibrary.org/b/id/8091016-L.jpg",
  },
  {
    id: 5,
    title: "Moby Dick",
    author: "Herman Melville",
    pages: 635,
    category: "Old",
    price: 13.25,
    image: "https://covers.openlibrary.org/b/id/555222-L.jpg",
  },
  {
    id: 6,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
    category: "Old",
    price: 9.99,
    image: "https://covers.openlibrary.org/b/id/7222276-L.jpg",
  },
  {
    id: 7,
    title: "War and Peace",
    author: "Leo Tolstoy",
    pages: 1225,
    category: "History",
    price: 16.9,
    image: "https://covers.openlibrary.org/b/id/7222245-L.jpg",
  },
  {
    id: 8,
    title: "Anna Karenina",
    author: "Leo Tolstoy",
    pages: 864,
    category: "Romance",
    price: 14.1,
    image: "https://covers.openlibrary.org/b/id/8235112-L.jpg",
  },
  {
    id: 9,
    title: "The Odyssey",
    author: "Homer",
    pages: 541,
    category: "Old",
    price: 15.99,
    image: "https://covers.openlibrary.org/b/id/8235283-L.jpg",
  },
  {
    id: 10,
    title: "The Iliad",
    author: "Homer",
    pages: 683,
    category: "Old",
    price: 15.99,
    image: "https://covers.openlibrary.org/b/id/8091234-L.jpg",
  },
  {
    id: 11,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 336,
    category: "New",
    price: 12.99,
    image: "https://covers.openlibrary.org/b/id/8228691-L.jpg",
  },
  {
    id: 12,
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    pages: 532,
    category: "Romance",
    price: 11.5,
    image: "https://covers.openlibrary.org/b/id/8231989-L.jpg",
  },
  {
    id: 13,
    title: "Brave New World",
    author: "Aldous Huxley",
    pages: 268,
    category: "Sci-Fi",
    price: 13.75,
    image: "https://covers.openlibrary.org/b/id/7222243-L.jpg",
  },
  {
    id: 14,
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    pages: 249,
    category: "Sci-Fi",
    price: 12.8,
    image: "https://covers.openlibrary.org/b/id/11138456-L.jpg",
  },
  {
    id: 15,
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    pages: 254,
    category: "Suspense",
    price: 11.2,
    image: "https://covers.openlibrary.org/b/id/8235081-L.jpg",
  },
  {
    id: 16,
    title: "The Call of Cthulhu",
    author: "H. P. Lovecraft",
    pages: 120,
    category: "Horror",
    price: 8.99,
    image: "https://covers.openlibrary.org/b/id/8235300-L.jpg",
  },
  {
    id: 17,
    title: "The Art of War",
    author: "Sun Tzu",
    pages: 273,
    category: "History of manners",
    price: 9.5,
    image: "https://covers.openlibrary.org/b/id/8235576-L.jpg",
  },
  {
    id: 18,
    title: "Meditations",
    author: "Marcus Aurelius",
    pages: 304,
    category: "History of manners",
    price: 10.75,
    image: "https://covers.openlibrary.org/b/id/8235205-L.jpg",
  },
  {
    id: 19,
    title: "The Prince",
    author: "Niccolò Machiavelli",
    pages: 140,
    category: "History of manners",
    price: 9.2,
    image: "https://covers.openlibrary.org/b/id/8235211-L.jpg",
  },
  {
    id: 20,
    title: "Hamlet",
    author: "William Shakespeare",
    pages: 210,
    category: "Old",
    price: 10.99,
    image: "https://covers.openlibrary.org/b/id/8235101-L.jpg",
  },
];

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

    openBtn.innerHTML = ""; // limpio antes de imprimir

    librosFiltrados.forEach((book) => {
      openBtn.innerHTML += `
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
      openBtn.innerHTML += `<div class="libro-picandtext" id=${book.id} onclick="showBookDetails(${book.id})">
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

const agregadoraDeLibros = () => {
  listacarro.innerHTML = " ";
  carrito.forEach((book) => {
    listacarro.innerHTML += ` <div class="casilla" id=${book.id}>
              <h3>${book.title}</h3>
              <p class="author">${book.author}</p>
              <p class="price">$${book.price}</p>
              <button class="remove">-</button>
                </div>`;
  });
  
  // const borrar = document.querySelectorAll ('.remove');
  //   borrar.forEach((botonborrar) =>{
  //     botonborrar.addEventListener("click", (e) => {
  //       const ElementoABorrar = e.target.ParentElement;
  //       ElementoABorrar.toggle();   
  //     });
  //   });
  }


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
templateLibros();
getCategoriasUnicas();

// document.addEventListener("DOMContentLoaded", async () => {
//     try{
//         let res = await fetch("json/object.json");
//         let data = await res.json();

//         data.forEach(data => {
//             books.push(data)
//         });

//         console.log(data)
//     }
//     catch (error){
//         console.error(error);
//     }
// });
