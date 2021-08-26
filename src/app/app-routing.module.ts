import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  {path: '', redirectTo: '/regions', pathMatch: 'full'},
  {path: 'regions/:continent/:country', loadChildren: () => import('./pages/country/country.module').then(m=>m.CountryModule)},
  {path: 'regions/:continent', loadChildren: () => import('./pages/list/list.module').then(m=>m.ListModule)},
  {path: 'regions', loadChildren: () => import('./pages/layout/layout.module').then(m=>m.LayoutModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}