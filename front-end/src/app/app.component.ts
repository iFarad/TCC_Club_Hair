import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title = 'Club Hair';

  logado: boolean

  constructor(
    private router: Router
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.logado = document.cookie.split(';')[0].includes("login")
      }
    });
    if (!document.cookie.split(';')[0].includes("login")) this.router.navigate(['/login']);
  }
}
