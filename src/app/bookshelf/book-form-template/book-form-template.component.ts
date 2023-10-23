import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-book-form-template',
  templateUrl: './book-form-template.component.html',
  styleUrls: ['./book-form-template.component.css']
})
export class BookFormTemplateComponent {
  formSubmitted = false;
  book = {
    title: '',
    author: '',
    genre: 'mystery'
  }

  onFormSubmitted(form: NgForm) {
    this.formSubmitted = true;
    this.book = {...form.value};

    form.reset({
      title: '',
      author: '',
      genre: 'mystery'
    });
  }

}
