import {Component} from '@angular/core';

import {MenuStateService} from '../services/menu-state.service';

@Component({
  selector: 'app-nav',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(protected menuState: MenuStateService) {}

  toggleMenu() {
    this.menuState.toggle();
  }

  close(){
    this.menuState.close();
  }
}
