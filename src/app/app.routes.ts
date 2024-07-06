import { Routes } from '@angular/router';
import { SchematicsDemoComponent } from './schematics-demo/schematics-demo.component';
import { CdkDemoComponent } from './cdk-demo/cdk-demo.component';
import { NavigationDemoComponent } from './navigation-demo/navigation-demo.component';
import { DashboardDemoComponent } from './dashboard-demo/dashboard-demo.component';
import { AddressFormDemoComponent } from './address-form-demo/address-form-demo.component';
import { TableDemoComponent } from './table-demo/table-demo.component';
import { TreeDemoComponent } from './tree-demo/tree-demo.component';
import { DragDropDemoComponent } from './drag-drop-demo/drag-drop-demo.component';

export const routes: Routes = [
  {
    path: 'schematics',
    loadComponent: () => SchematicsDemoComponent,
    loadChildren: () => [
      {
        path: 'address-form',
        loadComponent: () => AddressFormDemoComponent,
      },
      {
        path: 'navigation',
        loadComponent: () => NavigationDemoComponent,
      },
      {
        path: 'dashboard',
        loadComponent: () => DashboardDemoComponent,
      },
      {
        path: 'table',
        loadComponent: () => TableDemoComponent,
      },
      {
        path: 'tree',
        loadComponent: () => TreeDemoComponent,
      },
      {
        path: 'drag-drop',
        loadComponent: () => DragDropDemoComponent,
      },
    ],
  },
  {
    path: 'cdk',
    loadComponent: () => CdkDemoComponent,
  },
];
