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

  handleBookSelected(book: Book) {
    // console.log('BOOK:', book);
    this.currentSelectedBook.emit(book);
  }
}
