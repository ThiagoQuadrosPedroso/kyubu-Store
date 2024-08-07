import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
   {path:'',redirectTo:'catalogo',pathMatch:'full'},
   {path:'catalogo',component:CatalogoComponent},
   {path:'login',component:LoginComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
