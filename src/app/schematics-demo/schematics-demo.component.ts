import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';

export interface SchematicsFeature {
  title: string;
  path: string;
}


@Component({
  selector: 'app-schematics-demo',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatButtonModule],
  templateUrl: './schematics-demo.component.html',
  styleUrl: './schematics-demo.component.css'
})
export class SchematicsDemoComponent {
  schematicsFeatures: SchematicsFeature[] = [
    { title: 'Address Form Demo', path: 'address-form' },
    { title: 'Navigation Demo', path: 'navigation' },
    { title: 'Dashboard Demo', path: 'dashboard' },
    { title: 'Table Demo', path: 'table' },
    { title: 'Tree Demo', path: 'tree' },
    { title: 'Drag Drop Demo', path: 'drag-drop' },
  ];
}
