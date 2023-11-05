import { Injectable } from '@angular/core';
import { Book } from '../shared/book/book.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LibraryService {
  allBooks: Book[] = [];
  bookListChanged  = new Subject<Book[]>();
  
  constructor(private http: HttpClient) {}

  getBooks() {
    return [...this.allBooks];
  }

  fetchBooks(query: string) {
    // Turn Search Query into lowercase words with plus sign for spaces
    const formattedQuery = query.split(' ').join('+').toLowerCase();

    // Send HTTP GET Request to the "openLibrary" api endpoint using the tranformed input query
    this.http
      .get(`http://openlibrary.org/search.json?q=${formattedQuery}`)
      .subscribe((response) => {
        // Reset Books Array
        this.allBooks = [];
        // Save Books
        this.saveBooks(response);
      });
  }

  saveBooks(books) {
    // Map over all the book results
    books.docs.map((book) => {
      // Destructure the book results
      const { title, author_name, first_publish_year, isbn } = book;

      // For each book result, create a new book
      const newBook = new Book(
        title,
        author_name ? author_name[0] : 0,
        '',
        'https://tse2.mm.bing.net/th?id=OIP.I6LGwie40Vw4K8gmV52MKwHaLc&pid=Api&P=0&w=300&h=300',
        0,
        first_publish_year,
        isbn ? isbn[0] : ''
      );

      console.log('newBook:', newBook);

      // Add it to allBooks array
      this.allBooks.push(newBook);
    });

    // Emit the updated "allBooks" array
    this.bookListChanged.next(this.allBooks.slice());
  }
}
