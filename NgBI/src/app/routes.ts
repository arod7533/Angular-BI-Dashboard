import { Routes } from '@angular/router';
import { SectionSalesComponent } from './sections/section-sales/section-sales.component';
import { SectionHealthComponent } from './sections/section-health/section-health.component';
import { SectionOrdersComponent } from './sections/section-orders/section-orders.component';

export const appRoutes: Routes = [
  { path: 'sales', component: SectionSalesComponent },
  { path: 'health', component: SectionHealthComponent },
  { path: 'orders', component: SectionOrdersComponent },
  { path: '', redirectTo: '/sales', pathMatch: 'full' },
];

