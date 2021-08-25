import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InfoComponent } from "./about/info.component";
import { LayoutComponent } from "./pages/layout/layout.component";
import { ListComponent } from "./pages/list/list.component";
import { CountryComponent } from "./pages/country/country.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/regions', pathMatch: 'full'},
  {path: 'regions', component: LayoutComponent},
  // {path: 'regions/:region', component: ListComponent},
  {path: 'list', component: ListComponent},
  {path: ':country', component: CountryComponent},

  // {path: 'info', component: InfoComponent},
  // {path: 'country', component: CountryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}