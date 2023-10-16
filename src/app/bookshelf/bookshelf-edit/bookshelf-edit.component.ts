import { Component, OnInit } from '@angular/core';
import { BookshelfService } from '../bookshelf.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/shared/book/book.model';

@Component({
  selector: 'app-bookshelf-edit',
  templateUrl: './bookshelf-edit.component.html',
  styleUrls: ['./bookshelf-edit.component.css']
})
export class BookshelfEditComponent implements OnInit {
  book: Book;
  id: number;
  isEditMode: boolean = false;
  constructor(private bookshelfService: BookshelfService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.isEditMode = params["id"] != null;

      if (this.isEditMode) {
        this.id = +params["id"];
        this.book = this.bookshelfService.getBook(this.id);
        console.log("bookshelfEdit", this.book);
      }
    })
  }
}
