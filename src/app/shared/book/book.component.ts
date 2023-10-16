import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from './book.model';
import { BookshelfService } from 'src/app/bookshelf/bookshelf.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  @Input() book: Book;
  @Input() id: number;

  constructor(private bookshelfService: BookshelfService) {}

  onBookSelected() {
    // Tell App that someone clicked on a book!
    this.bookshelfService.selectBook(this.book);
  }
}
