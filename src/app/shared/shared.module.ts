import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortBooksPipe } from './pipes/sort-books.pipe';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './book/book.component';
import { RouterModule } from '@angular/router';
import { DropdownDirective } from './directives/dropdown.directive';

@NgModule({
  declarations: [SortBooksPipe, BookComponent, DropdownDirective],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [SortBooksPipe, FormsModule, BookComponent, CommonModule, DropdownDirective],
})
export class SharedModule {}
