const categories = document.getElementsByClassName('categories-btn')
const aside = document.getElementById('myAside');
const closeBtn = document.getElementById('closeBtn');
const informacionLibros = document.getElementById('book-detailsjs');
const openBtn = document.getElementById('openBtn')


openBtn.addEventListener("click", () => {
    myAside.classList.add("show");
});

closeBtn.addEventListener("click", () => {
    aside.classList.remove("show");
});

const books = [
    {
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "pages": 432,
        "category": "Romance",
        "price": 12.99,
        "image": "https://covers.openlibrary.org/b/id/8225261-L.webp"
    },
    {
        "title": "1984",
        "author": "George Orwell",
        "pages": 328,
        "category": "Sci-Fi",
        "price": 14.50,
        "image": "https://covers.openlibrary.org/b/id/7222246-L.webp"
    },
    {
        "title": "Dracula",
        "author": "Bram Stoker",
        "pages": 418,
        "category": "Horror",
        "price": 11.75,
        "image": "https://covers.openlibrary.org/b/id/8231992-L.webp"
    },
    {
        "title": "Frankenstein",
        "author": "Mary Shelley",
        "pages": 280,
        "category": "Horror",
        "price": 10.99,
        "image": "https://covers.openlibrary.org/b/id/8091016-L.webp"
    },
    {
        "title": "Moby Dick",
        "author": "Herman Melville",
        "pages": 635,
        "category": "Old",
        "price": 13.25,
        "image": "https://covers.openlibrary.org/b/id/555222-L.webp"
    },
    {
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "pages": 180,
        "category": "Old",
        "price": 9.99,
        "image": "https://covers.openlibrary.org/b/id/7222276-L.webp"
    },
    {
        "title": "War and Peace",
        "author": "Leo Tolstoy",
        "pages": 1225,
        "category": "History",
        "price": 16.90,
        "image": "https://covers.openlibrary.org/b/id/7222245-L.webp"
    },
    {
        "title": "Anna Karenina",
        "author": "Leo Tolstoy",
        "pages": 864,
        "category": "Romance",
        "price": 14.10,
        "image": "https://covers.openlibrary.org/b/id/8235112-L.webp"
    },
    {
        "title": "The Odyssey",
        "author": "Homer",
        "pages": 541,
        "category": "Old",
        "price": 15.99,
        "image": "https://covers.openlibrary.org/b/id/8235283-L.webp"
    },
    {
        "title": "The Iliad",
        "author": "Homer",
        "pages": 683,
        "category": "Old",
        "price": 15.99,
        "image": "https://covers.openlibrary.org/b/id/8091234-L.webp"
    },
    {
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "pages": 336,
        "category": "New",
        "price": 12.99,
        "image": "https://covers.openlibrary.org/b/id/8228691-L.webp"
    },
    {
        "title": "Jane Eyre",
        "author": "Charlotte Brontë",
        "pages": 532,
        "category": "Romance",
        "price": 11.50,
        "image": "https://covers.openlibrary.org/b/id/8231989-L.webp"
    },
    {
        "title": "Brave New World",
        "author": "Aldous Huxley",
        "pages": 268,
        "category": "Sci-Fi",
        "price": 13.75,
        "image": "https://covers.openlibrary.org/b/id/7222243-L.webp"
    },
    {
        "title": "Fahrenheit 451",
        "author": "Ray Bradbury",
        "pages": 249,
        "category": "Sci-Fi",
        "price": 12.80,
        "image": "https://covers.openlibrary.org/b/id/11138456-L.webp"
    },
    {
        "title": "The Picture of Dorian Gray",
        "author": "Oscar Wilde",
        "pages": 254,
        "category": "Suspense",
        "price": 11.20,
        "image": "https://covers.openlibrary.org/b/id/8235081-L.webp"
    },
    {
        "title": "The Call of Cthulhu",
        "author": "H. P. Lovecraft",
        "pages": 120,
        "category": "Horror",
        "price": 8.99,
        "image": "https://covers.openlibrary.org/b/id/8235300-L.webp"
    },
    {
        "title": "The Art of War",
        "author": "Sun Tzu",
        "pages": 273,
        "category": "History of manners",
        "price": 9.50,
        "image": "https://covers.openlibrary.org/b/id/8235576-L.webp"
    },
    {
        "title": "Meditations",
        "author": "Marcus Aurelius",
        "pages": 304,
        "category": "History of manners",
        "price": 10.75,
        "image": "https://covers.openlibrary.org/b/id/8235205-L.webp"
    },
    {
        "title": "The Prince",
        "author": "Niccolò Machiavelli",
        "pages": 140,
        "category": "History of manners",
        "price": 9.20,
        "image": "https://covers.openlibrary.org/b/id/8235211-L.webp"
    },
    {
        "title": "Hamlet",
        "author": "William Shakespeare",
        "pages": 210,
        "category": "Old",
        "price": 10.99,
        "image": "https://covers.openlibrary.org/b/id/8235101-L.webp"
    },
    {
        "title": "Macbeth",
        "author": "William Shakespeare",
        "pages": 180,
        "category": "Old",
        "price": 10.50,
        "image": "https://covers.openlibrary.org/b/id/8235102-L.webp"
    },
    {
        "title": "Romeo and Juliet",
        "author": "William Shakespeare",
        "pages": 200,
        "category": "Romance",
        "price": 10.70,
        "image": "https://covers.openlibrary.org/b/id/8235103-L.webp"
    },
    {
        "title": "Les Misérables",
        "author": "Victor Hugo",
        "pages": 1463,
        "category": "History",
        "price": 18.25,
        "image": "https://covers.openlibrary.org/b/id/8231995-L.webp"
    },
    {
        "title": "The Hunchback of Notre-Dame",
        "author": "Victor Hugo",
        "pages": 940,
        "category": "History",
        "price": 15.50,
        "image": "https://covers.openlibrary.org/b/id/8231994-L.webp"
    },
    {
        "title": "Crime and Punishment",
        "author": "Fyodor Dostoevsky",
        "pages": 671,
        "category": "Suspense",
        "price": 13.95,
        "image": "https://covers.openlibrary.org/b/id/8231993-L.webp"
    },
    {
        "title": "The Brothers Karamazov",
        "author": "Fyodor Dostoevsky",
        "pages": 796,
        "category": "Suspense",
        "price": 14.80,
        "image": "https://covers.openlibrary.org/b/id/8231997-L.webp"
    },
    {
        "title": "Don Quixote",
        "author": "Miguel de Cervantes",
        "pages": 992,
        "category": "Old",
        "price": 16.40,
        "image": "https://covers.openlibrary.org/b/id/8231996-L.webp"
    },
    {
        "title": "A Tale of Two Cities",
        "author": "Charles Dickens",
        "pages": 489,
        "category": "History",
        "price": 12.60,
        "image": "https://covers.openlibrary.org/b/id/8231998-L.webp"
    },
    {
        "title": "Great Expectations",
        "author": "Charles Dickens",
        "pages": 544,
        "category": "Old",
        "price": 13.00,
        "image": "https://covers.openlibrary.org/b/id/8231999-L.webp"
    },
    {
        "title": "Oliver Twist",
        "author": "Charles Dickens",
        "pages": 554,
        "category": "Old",
        "price": 12.50,
        "image": "https://covers.openlibrary.org/b/id/8232000-L.webp"
    }
]

// const AgregadoraDeEvento = () => {
//     const ListOfButtons = document.querySelectorAll('openBtn')
//     const ArrayOfList = Array.from(ListOfButtons)

//     ArrayOfList.forEach(ListOfButtons => {
//         ListOfButtons.addEventListener("click",(Event) =>{
//             let titulo = Event.target.parentNode.title
//             console.log(titulo)
//         })
//     })
// }
// const renderCards = () => {
//     books.forEach((book) => {
//         bookList.innerHTML += `<h2>Deals for you</h2>
//             <button class="libro-picandtext">
//                 <img src=${books.image} alt="${books.title}">
//                 <div class="libro-detalles">
//                     <h3>${books.title}</h3>
//                     <p>${books.author}</p>
//                     <p>${books.pages}</p>
//                     <p>${books.price}</p>
//                 </div>
//             </button>`
//     });
// }

const templateLibros = () =>{
    books.forEach((book) =>{
        openBtn.innerHTML += `<div class="libro-picandtext">
                        <img ${book.image} alt="${book.title} ">
                        <div class="libro-detalles">
                            <h3>${book.title} </h3>
                            <p class="author">${book.author} </p>
                            <p class="pages">${book.pages} s</p>
                            <p class="price">${book.price} </p></p>
                        </div>
                    </div>`
    })
}

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

templateLibros()
