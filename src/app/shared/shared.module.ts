import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortBooksPipe } from './pipes/sort-books.pipe';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './book/book.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SortBooksPipe, BookComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [SortBooksPipe, FormsModule, BookComponent, CommonModule],
})
export class SharedModule {}
