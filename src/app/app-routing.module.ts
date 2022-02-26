import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 10],
};

const routes: Routes = [
  { path: '', redirectTo: 'malayer', pathMatch: 'full'},
  { path: 'malayer', component: HomeComponent},
  { path: 'arak', component: HomeComponent},
  { path: '**', redirectTo: 'malayer'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
