import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuStateService {
  private isOpenSubject= new BehaviorSubject<boolean>(false);

  isOpen$ = this.isOpenSubject.asObservable();

  toggle() {
    const current = this.isOpenSubject.value
    this.isOpenSubject.next(!current);
  }

  open() {
    this.isOpenSubject.next(true);
  }

  close() {
    this.isOpenSubject.next(false);
  }

}
