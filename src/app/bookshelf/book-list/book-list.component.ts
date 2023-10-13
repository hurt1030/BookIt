import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';
import { BookshelfService } from '../bookshelf.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];

  constructor(private bookshelfService: BookshelfService) {}

  ngOnInit(): void {
    this.books = this.bookshelfService.getBooks();
    this.bookshelfService.bookListChanged.subscribe((books) => this.books = books);
  }

  removeBook(id: number) {
    this.bookshelfService.removeBook(id);
  }
}
