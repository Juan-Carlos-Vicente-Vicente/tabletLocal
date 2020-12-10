import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallesComponent } from './components/detalles/detalles.component';
import { LoginComponent } from './components/login/login.component';
import { TabletComponent } from './components/tablet/tablet.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "tablet", component: TabletComponent },
  { path: "detalles", component: DetallesComponent },
  { path: "detalles/:id", component: DetallesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
