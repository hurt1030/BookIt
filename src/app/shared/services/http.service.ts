import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookshelfService } from 'src/app/bookshelf/bookshelf.service';
import { environment } from 'src/environments/environment';
import { Book } from '../book/book.model';

const FIREBASE_URL = environment.firebaseUrl;

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(
    private bookshelfService: BookshelfService,
    private http: HttpClient
  ) {}

  // * Methods

  // save data to Firebase - REQUEST
  // URL - https://springfield-2023-default-rtdb.firebaseio.com/
  // DATA - my books
  // HTTP VERB - POST
  saveBooksToFirebase() {
    const myBooks = this.bookshelfService.getBooks();

    this.http.put(FIREBASE_URL, myBooks).subscribe((data) => {
      console.log(data);
    });
  }

  // fetch data from Firebase - REQUEST
  fetchBooksFromFirebase() {
    this.http.get(FIREBASE_URL).subscribe((data: Book[]) => {
      console.log('DATA from FB: ', data);
      this.bookshelfService.setBooks(data ?? []);
    });
  }
}
