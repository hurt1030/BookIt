import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookshelfComponent } from './bookshelf.component';
import { authGuard } from '../shared/auth/auth.guard';
import { BookshelfHomeComponent } from './bookshelf-home/bookshelf-home.component';
import { BookshelfEditComponent } from './bookshelf-edit/bookshelf-edit.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';
import { SortBooksPipe } from '../shared/pipes/sort-books.pipe';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: BookshelfComponent,
    canActivate: [authGuard],
    children: [
      { path: '', component: BookshelfHomeComponent },
      { path: 'new', component: BookshelfEditComponent },
      { path: ':id', component: BookDetailsComponent },
      { path: ':id/edit', component: BookshelfEditComponent },
    ],
  },
];

@NgModule({
  declarations: [
    BookshelfComponent,
    BookshelfHomeComponent,
    BookshelfEditComponent,
    BookDetailsComponent,
    BookListComponent,
    TestComponent,
  ],
  imports: [ RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
})
export class BookshelfModule {}
