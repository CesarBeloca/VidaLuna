import {Component } from '@angular/core';
import {MenuStateService} from '../services/menu-state.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-nav-drawer',
  standalone: false,
  templateUrl: './nav-drawer.html',
  styleUrl: './nav-drawer.css',
})
export class NavDrawer {
  isOpen$: Observable<boolean>;

  constructor(private menuStateService: MenuStateService) {
    this.isOpen$ = this.menuStateService.isOpen$;
  }

  close() {
    this.menuStateService.close();
  }

}
