import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/product-detail/product-detail.component').then(
        (c) => c.ProductDetailComponent
      ),
  },
];
