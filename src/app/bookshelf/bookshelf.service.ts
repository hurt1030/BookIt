import { EventEmitter, Injectable } from "@angular/core";
import { Book } from "../shared/book/book.model";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class BookshelfService {
  bookSelected = new Subject<Book>();
  bookListChanged = new Subject<Book[]>();
  private books: Book[] = [
    new Book(
        'Book of Testing',
        'Will Wilder',
        'Mystery',
        'https://source.unsplash.com/50x50/?mystery,book'
    ),
    new Book(
        'Testing Title 2',
        'Nolan Hovis',
        'Science',
        'https://source.unsplash.com/50x50/?science,book'
    ),
    new Book(
        'Fantasy Test',
        'German Cruz',
        'Non-Fiction',
        'https://source.unsplash.com/50x50/?fantasy,book'
    ),
    new Book(
        'Fantasy Test',
        'Lex Pryor',
        'Math',
        'https://source.unsplash.com/50x50/?math,book'
    ),
  ];

  getBooks() {
    return [...this.books];
  }

  getBook(id: number) {
    return this.books[id];
  }

  selectBook(book: Book) {
    this.bookSelected.next(book);
  }

  removeBook(id: number) {
    this.books.splice(id, 1);
    this.bookListChanged.next(this.getBooks());
  }

  saveBook(book: Book) {
    this.books.push(book);
    this.bookListChanged.next(this.getBooks());
  }
}
