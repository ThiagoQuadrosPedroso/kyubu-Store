import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { CadUsuarioComponent } from './cad-usuario/cad-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    LoginComponent,
    MenuComponent,
    HomeComponent,
    CadUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
