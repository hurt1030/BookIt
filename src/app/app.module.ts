import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { BookListComponent } from './bookshelf/book-list/book-list.component';
import { BookDetailsComponent } from './bookshelf/book-details/book-details.component';
import { BookComponent } from './shared/book/book.component';
import { BookResultsComponent } from './library/book-results/book-results.component';
import { BookSearchComponent } from './library/book-search/book-search.component';
import { LibraryComponent } from './library/library.component';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { BookshelfService } from './bookshelf/bookshelf.service';
import { AppRoutingModule } from './app-routing.module';
import { BookshelfHomeComponent } from './bookshelf/bookshelf-home/bookshelf-home.component';
import { BookshelfEditComponent } from './bookshelf/bookshelf-edit/bookshelf-edit.component';
import { BookFormTemplateComponent } from './bookshelf/book-form-template/book-form-template.component';
import { BookFormReactiveComponent } from './bookshelf/book-form-reactive/book-form-reactive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookshelfComponent,
    BookListComponent,
    BookDetailsComponent,
    BookComponent,
    BookResultsComponent,
    BookSearchComponent,
    LibraryComponent,
    DropdownDirective,
    BookshelfHomeComponent,
    BookshelfEditComponent,
    BookFormTemplateComponent,
    BookFormReactiveComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
