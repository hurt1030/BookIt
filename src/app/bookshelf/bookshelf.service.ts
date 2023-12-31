import { EventEmitter, Injectable } from '@angular/core';
import { Book } from '../shared/book/book.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BookshelfService {
  bookSelected = new Subject<Book>();
  bookListChanged = new Subject<Book[]>();
  private books: Book[] = [];

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

  setBooks(books: Book[]) {
    this.books = books;
    this.bookListChanged.next(this.getBooks());
  }

  updateBook(index: number, updatedBook) {
    // step 1: update book
    this.books[index] = updatedBook;

    // step 2: alert subscribers of change
    this.bookListChanged.next(this.getBooks());
  }
}

