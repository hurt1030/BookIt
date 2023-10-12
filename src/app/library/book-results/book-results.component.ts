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
      "API Book 1",
      "Will Wilder",
      "Mystery",
      "https://source.unsplash.com/50x50/?mystery,book"
    ),
    new Book(
      "API Book 2",
      "Nolan Hovis",
      "Non-Fiction",
      "https://source.unsplash.com/50x50/?serious,book"
    ),
    new Book(
      "API Book 3",
      "German Cruz",
      "Mystery",
      "https://source.unsplash.com/50x50/?mystery,book"
    ),
    new Book(
      "API Book 4",
      "Lex Pryor",
      "Non-Fiction",
      "https://source.unsplash.com/50x50/?serious,book"
    )
  ];
}
