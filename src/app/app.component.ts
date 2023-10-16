import { Component } from '@angular/core';
import { Book } from './shared/book/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedBook: Book;
}
