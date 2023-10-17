import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';
import { BookshelfService } from '../bookshelf.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: Book;
  id: number;

  constructor(private bookshelfService: BookshelfService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params["id"];
      this.book = this.bookshelfService.getBook(this.id)
    })
  }

}
