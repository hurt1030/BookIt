import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from 'src/app/shared/book/book.model';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css'],
})
export class BookSearchComponent {
  // * Properties
  searchInput = '';

  constructor(private http: HttpClient) {}

  onFetchBooks(searchInput: string) {
    // Turn Search Query into lowercase words with plus sign for spaces
    const formattedQuery = searchInput.split(' ').join('+').toLowerCase();

    // Send HTTP GET Request to the "openLibrary" api endpoint using the tranformed input query
    this.http
      .get(`http://openlibrary.org/search.json?q=${formattedQuery}`)
      .subscribe((searchResults) => {
        console.log('searchResults', searchResults);
      });
  }
}
