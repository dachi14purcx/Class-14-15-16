// წიგნების მაღაზიის და პირადი კოლექციის მართვის ვებსაიტი

// წიგნების მაღაზიის მონაცემთა სტრუქტურა
const bookstore = new Map([
    ["978-0131103627", { title: "The C Programming Language", author: "Brian Kernighan", genre: "Programming", price: 30, added: false }],
    ["978-0262033848", { title: "Introduction to Algorithms", author: "Thomas H. Cormen", genre: "Algorithms", price: 50, added: false }],
    ["978-0201633610", { title: "Design Patterns", author: "Erich Gamma", genre: "Software Design", price: 40, added: false }]
]);

// პირადი კოლექცია
let personalCollection = new Map(JSON.parse(localStorage.getItem("personalCollection")) || []);

// წიგნის დამატება პირად კოლექციაში
function addToCollection(isbn) {
    if (bookstore.has(isbn) && !bookstore.get(isbn).added) {
        let book = bookstore.get(isbn);
        book.added = true;
        personalCollection.set(isbn, book);
        updateLocalStorage();
        renderBooks();
    }
}

// წიგნის წაშლა პირადი კოლექციიდან
function removeFromCollection(isbn) {
    if (personalCollection.has(isbn)) {
        let book = personalCollection.get(isbn);
        book.added = false;
        personalCollection.delete(isbn);
        updateLocalStorage();
        renderBooks();
    }
}

// მონაცემების შენახვა localStorage-ში
function updateLocalStorage() {
    localStorage.setItem("personalCollection", JSON.stringify(Array.from(personalCollection.entries())));
}

// წიგნების რენდერი მაღაზიასა და პირად კოლექციაში
function renderBooks() {
    const storeDiv = document.getElementById("bookstore");
    const collectionDiv = document.getElementById("collection");
    storeDiv.innerHTML = "";
    collectionDiv.innerHTML = "";

    bookstore.forEach((book, isbn) => {
        storeDiv.innerHTML += `<div>
            <h3>${book.title}</h3>
            <p>${book.author} - ${book.genre}</p>
            <p>$${book.price}</p>
            <button onclick="addToCollection('${isbn}')" ${book.added ? "disabled" : ""}>${book.added ? "Added" : "Add to Collection"}</button>
        </div>`;
    });

    personalCollection.forEach((book, isbn) => {
        collectionDiv.innerHTML += `<div>
            <h3>${book.title}</h3>
            <p>${book.author} - ${book.genre}</p>
            <button onclick="removeFromCollection('${isbn}')">Remove</button>
        </div>`;
    });
}

// გვერდის ჩატვირთვისას არსებული მონაცემების ჩვენება
window.onload = renderBooks;

  