import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../shared/book/book.model';
import { BookshelfService } from './bookshelf.service';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit {
  selectedBook: Book;

  constructor(private bookshelfService: BookshelfService) {}

  ngOnInit(): void {
    this.bookshelfService.bookSelected.subscribe((book) => this.selectedBook = book);
  }

}
