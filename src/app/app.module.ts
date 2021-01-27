import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './Components/menu/menu.component';
import { FigurasComponent } from './Components/figuras/figuras.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { AnimacionRutaComponent } from './Components/animacion-ruta/animacion-ruta.component';
import { HeroesComponent } from './Components/heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FigurasComponent,
    PageNotFoundComponent,
    AnimacionRutaComponent,
    HeroesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
