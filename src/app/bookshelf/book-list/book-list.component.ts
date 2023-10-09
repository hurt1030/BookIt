import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent {
  @Output() currentSelectedBook = new EventEmitter<Book>();

  books: Book[] = [
    new Book(
      'The Princess Bride',
      'William Goldman',
      'Fantasy',
      'https://m.media-amazon.com/images/I/712n+hhjX3L._AC_UF1000,1000_QL80_.jpg'
    ),
    new Book(
      'The Princess Bride',
      'William Goldman',
      'Fantasy',
      'https://m.media-amazon.com/images/I/712n+hhjX3L._AC_UF1000,1000_QL80_.jpg'
    ),
    new Book(
      'The Princess Bride',
      'William Goldman',
      'Fantasy',
      'https://m.media-amazon.com/images/I/712n+hhjX3L._AC_UF1000,1000_QL80_.jpg'
    ),
  ];

  handleBookSelected(book: Book) {
    // console.log('BOOK:', book);
    this.currentSelectedBook.emit(book);
  }
}
