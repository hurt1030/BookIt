import { Component, OnInit } from '@angular/core';
import { BookshelfService } from '../bookshelf.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/shared/book/book.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bookshelf-edit',
  templateUrl: './bookshelf-edit.component.html',
  styleUrls: ['./bookshelf-edit.component.css'],
})
export class BookshelfEditComponent implements OnInit {
  book: Book = new Book('', '', '', '');

  id: number;
  isEditMode: boolean = false;
  formSubmitted = false;

  constructor(
    private bookshelfService: BookshelfService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.isEditMode = params['id'] != null;

      if (this.isEditMode) {
        this.id = +params['id'];
        this.book = this.bookshelfService.getBook(this.id);
        console.log('bookshelfEdit', this.book, this.id);
      }
    });
  }

  onFormSubmitted(form: NgForm) {
    this.formSubmitted = true;
    this.book = { ...form.value };

    if (this.isEditMode) {
      // update the book
      this.bookshelfService.updateBook(this.id, this.book);
    } else {
      // add a book
      this.bookshelfService.saveBook(this.book);

      form.reset({
        title: '',
        author: '',
        genre: 'mystery',
      });
    }
  }
}
