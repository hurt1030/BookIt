import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  collapsed = true;

  constructor(private httpService: HttpService) {}

  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }

  onSaveBooks() {
    this.httpService.saveBooksToFirebase();
  }

  onFetchBooks() {
    this.httpService.fetchBooksFromFirebase();
  }
}
