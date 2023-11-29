// Create constructor functions for Book and Author to represent books and authors.
// The Author constructor should take name, birthYear, and nationality as arguments.
// The Book constructor should take title, author (an Author object), genre, and price as arguments.
// Implement methods in the Book prototype:
// getBookInfo - to print the book's title, author's name, genre, and price.
// Create an online bookstore by creating instances of Book and Author objects.
// Display the book details for each book in the bookstore.


function Author(name, birthYear,nationality){
     this.name = name;
     this.birthYear = birthYear;
     this.nationality = nationality;
}

function Book(title,author,genre,price){
      this.title = title;
      this.author = author;
      this.genre = genre;
      this.price = price;
}

Book.prototype.getBookInfo = function(title,author,genre,price){
      return `${title},${this.author},${this.genre},${this.price}`
}



let aut1 = new Author("Gaurav",2020,"Indian")
let aut2 = new Author("rahul",2020,"indian")
let aut3 = new Author("sham",2019,"indian")

let book1 = new Book("the mind",aut1,"ghh",520)
let book2 = new Book("the bank",aut2,"ghghj",150) 
let book3 = new Book("yes",aut3,"fhf",741)

book1.getBookInfo()
book2.getBookInfo()
console.log(book1,book2,book3)



