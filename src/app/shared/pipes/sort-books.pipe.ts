import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../book/book.model';

@Pipe({
  name: 'sortBooks',
})
export class SortBooksPipe implements PipeTransform {
  transform(books, field: string): unknown {
    books.sort((a: Book, b: Book) => {
      if (a[field] < b[field]) {
        return -1;
      } else {
        return 1;
      }
    });

    return books;
  }
}
