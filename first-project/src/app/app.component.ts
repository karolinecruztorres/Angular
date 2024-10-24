import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyFirstComponent } from './my-first/my-first.component';
import { MyFirst2Component } from './my-first-2/my-first-2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyFirstComponent, MyFirst2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Hello, World!';
}
