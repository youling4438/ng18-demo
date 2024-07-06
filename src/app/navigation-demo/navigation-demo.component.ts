import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { SchematicsFeature } from '../schematics-demo/schematics-demo.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navigation-demo',
  templateUrl: './navigation-demo.component.html',
  styleUrl: './navigation-demo.component.css',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterOutlet,
    RouterLink,
  ]
})
export class NavigationDemoComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  schematicsFeatures: SchematicsFeature[] = [
    { title: 'Address Form Demo', path: 'address-form' },
    { title: 'Dashboard Demo', path: 'dashboard' },
    { title: 'Table Demo', path: 'table' },
    { title: 'Tree Demo', path: 'tree' },
    { title: 'Drag Drop Demo', path: 'drag-drop' },
  ];

}
