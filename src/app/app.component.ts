import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
export interface NgFeature {
  title: string;
  path: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng18-demo';

  ngFeatures: NgFeature[] = [
    { title: 'Schematics Demo', path: 'schematics' },
    { title: 'Cdk Demo', path: 'cdk' },
  ];
}
