import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  collapsed = true;
  isAuthenticated = false;

  constructor(private httpService: HttpService, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.currentUser.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy(): void {
    this.authService.currentUser.unsubscribe();
  }

  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }

  onSaveBooks() {
    this.httpService.saveBooksToFirebase();
  }

  onFetchBooks() {
    this.httpService.fetchBooksFromFirebase();
  }

  onLogOut() {
    this.authService.logOut();
  }
}
