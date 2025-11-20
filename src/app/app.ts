import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { AsideComponent } from './components/layout/aside/aside.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, AsideComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('frontend');
}
