export class Book {
  constructor({ id, title, author, isbn, copiesAvailable = 1 }) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.copiesAvailable = copiesAvailable;
    this.type = "book";
  }
}
