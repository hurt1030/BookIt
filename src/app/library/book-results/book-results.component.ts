import { Component } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';

@Component({
  selector: 'app-book-results',
  templateUrl: './book-results.component.html',
  styleUrls: ['./book-results.component.css'],
})
export class BookResultsComponent {
  allBooks: Book[] = [
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
}
