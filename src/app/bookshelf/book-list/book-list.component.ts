import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';
import { BookshelfService } from '../bookshelf.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];

  constructor(private bookshelfService: BookshelfService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.books = this.bookshelfService.getBooks();
    this.bookshelfService.bookListChanged.subscribe((books) => this.books = books);
  }

  removeBook(id: number) {
    this.bookshelfService.removeBook(id);
  }

  onAddBook() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
