import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-form-reactive',
  templateUrl: './book-form-reactive.component.html',
  styleUrls: ['./book-form-reactive.component.css']
})
export class BookFormReactiveComponent implements OnInit {
  bookForm: FormGroup;
  book = {
    title: '',
    author: '',
    genre: 'mystery'
  };
  formSubmitted = false;

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required),
      genre: new FormControl('mystery', Validators.required)
    });
  }

  onFormSubmitted() {
    this.formSubmitted = true;
    this.book = {...this.bookForm.value};

    this.bookForm.reset({
      title: '',
      author: '',
      genre: 'mystery'
    });
  }
}
