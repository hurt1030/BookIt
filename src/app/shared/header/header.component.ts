import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  show = false;
  collapsed = true;
  @Output() currentPage = new EventEmitter<string>();

  toggleDropdown() {
    this.show = !this.show;
  }

  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }

  onSelectPage(page: string) {
    // Page Change Logic - Pass Page to Parent
    // console.log("NAV:", page);
    this.currentPage.emit(page);
  }
}
