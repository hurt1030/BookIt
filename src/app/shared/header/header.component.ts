import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  show = false;
  collapsed = true;

  toggleDropdown() {
    this.show = !this.show;
  }

  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }
}
