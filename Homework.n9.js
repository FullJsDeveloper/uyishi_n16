class Author {
    constructor(name, birthYear) {
        this.name = name
        this.birthYear = birthYear
        this.books = []
    }
}
class Book {
    constructor(title, author, publisher) {
        this.title = title
        this.author = author
        this.publisher = publisher
    }
}
class Library {
    constructor() {
        this.books = []
        this.authors = []
    }

    addBook(book) {
        this.books.push(book)
        let authorExists = false
        for (let i = 0; i < this.authors.length; i++) {
            if (this.authors[i].name === book.author.name) {
                authorExists = true
                break
            }
        }
        if (!authorExists) {
            this.authors.push(book.author)
        }
    }

    removeBook(book) {
        let index = -1
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i] === book) {
                index = i
                break
            }
        }
        if (index !== -1) {
            this.books.splice(index, 1)
        }
    }

    sortByTitle() {
        for (let i = 0; i < this.books.length - 1; i++) {
            for (let j = 0; j < this.books.length - i - 1; j++) {
                if (this.books[j].title > this.books[j + 1].title) {
                    let temp = this.books[j]
                    this.books[j] = this.books[j + 1]
                    this.books[j + 1] = temp
                }
            }
        }
    }

    filterByAuthor(authorName) {
        let filteredBooks = []
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].author.name === authorName) {
                filteredBooks.push(this.books[i])
            }
        }
        return filteredBooks
    }
}

const tolkien = new Author('J.R.R. Tolkien', 1892)
const rowling = new Author('J.K. Rowling', 1965)

const kitob = new Book('The Lord of the Rings', tolkien, 'Allen & Unwin')
const kitob2 = new Book('Harry Potter', rowling, 'Bloomsbury')

const library = new Library()
library.addBook(kitob)
library.addBook(kitob2)

library.sortByTitle()

const tolkienBooks = library.filterByAuthor('J.R.R. Tolkien')
console.log(tolkienBooks)