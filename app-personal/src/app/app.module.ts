import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './carpetaNavbar/navbar/navbar.component';
import { NavbarEnlacesSeccionesComponent } from './carpetaNavbar/navbar-enlaces-secciones/navbar-enlaces-secciones.component';
import { NavbarEnlacesRedesSocialesComponent } from './carpetaNavbar/navbar-enlaces-redes-sociales/navbar-enlaces-redes-sociales.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarEnlacesSeccionesComponent,
    NavbarEnlacesRedesSocialesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
