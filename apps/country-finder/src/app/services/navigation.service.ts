import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export enum Pages {
  CONTINENTS = '',
  REGION = 'region',
  COUNTRY = 'country',
}

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(
    private router: Router,
  ) {}

  navigateTo(page: Pages, id: string): void {
    this.router.navigate([page, id]);
  }

  goHome(): void {
    this.router.navigate(['']);
  }
}
