import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LibraryComponent } from './library.component';
import { SharedModule } from '../shared/shared.module';
import { BookResultsComponent } from './book-results/book-results.component';
import { BookSearchComponent } from './book-search/book-search.component';

const routes: Routes = [
  {
    path: '',
    component: LibraryComponent,
  },
];

@NgModule({
  declarations: [LibraryComponent, BookResultsComponent, BookSearchComponent],
  imports: [ RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
})
export class LibraryModule {}
