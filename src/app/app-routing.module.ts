import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookshelfComponent } from "./bookshelf/bookshelf.component";
import { LibraryComponent } from "./library/library.component";
import { BookDetailsComponent } from "./bookshelf/book-details/book-details.component";
import { BookshelfHomeComponent } from "./bookshelf/bookshelf-home/bookshelf-home.component";
import { BookshelfEditComponent } from "./bookshelf/bookshelf-edit/bookshelf-edit.component";
import { AuthComponent } from "./shared/auth/auth.component";
import { authGuard } from "./shared/auth/auth.guard";

const routes: Routes = [
  { path: '', redirectTo: '/bookshelf', pathMatch: 'full' },
  {
    path: 'bookshelf',
    component: BookshelfComponent,
    canActivate: [authGuard],
    children: [
      { path: '', component: BookshelfHomeComponent },
      { path: 'new', component: BookshelfEditComponent },
      { path: ':id', component: BookDetailsComponent },
      { path: ':id/edit', component: BookshelfEditComponent },
    ]
  },
  { path: 'library', canActivate: [authGuard], component: LibraryComponent },
  { path: 'auth', component: AuthComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
