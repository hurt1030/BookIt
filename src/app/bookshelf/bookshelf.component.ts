import { Component, Input } from '@angular/core';
import { Book } from '../shared/book/book.model';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent {
  @Input() selectedBook: Book;

}
