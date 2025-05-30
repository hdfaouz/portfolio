import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HomeComponent],
  template: `
    <app-header/>
    <app-home/>
  `,
  styles: [],
})
export class AppComponent {
  title = 'myportfolio';
}
