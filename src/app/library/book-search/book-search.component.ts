import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from 'src/app/shared/book/book.model';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css'],
})
export class BookSearchComponent {
  // * Properties
  searchInput = '';

  constructor(private libraryService:LibraryService) {}

  onFetchBooks(searchInput: string) {
    // Turn Search Query into lowercase words with plus sign for spaces
    this.libraryService.fetchBooks(searchInput)
  }
}
