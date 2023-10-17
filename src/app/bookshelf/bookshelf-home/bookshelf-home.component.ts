import { Component, OnInit } from '@angular/core';
import { BookshelfService } from '../bookshelf.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bookshelf-home',
  templateUrl: './bookshelf-home.component.html',
  styleUrls: ['./bookshelf-home.component.css']
})
export class BookshelfHomeComponent implements OnInit {

  constructor(private bookshelfService: BookshelfService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    if (this.bookshelfService.getBooks().length > 0) {
      this.router.navigate([0], {relativeTo: this.route})
    }
  }
}
