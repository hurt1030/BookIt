import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';
import { LibraryService } from '../library.service';
import { BookshelfService } from 'src/app/bookshelf/bookshelf.service';

@Component({
  selector: 'app-book-results',
  templateUrl: './book-results.component.html',
  styleUrls: ['./book-results.component.css'],
})
export class BookResultsComponent implements OnInit {
  allBooks: Book[];

  constructor(private libraryService: LibraryService, private bookshelfService: BookshelfService) {}

  ngOnInit(): void {
    this.allBooks = this.libraryService.getBooks();
  }

  saveBook(book: Book) {
    this.bookshelfService.saveBook(book);
  }
}
