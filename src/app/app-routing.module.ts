import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from "./Components/menu/menu.component";
import { FigurasComponent } from "./Components/figuras/figuras.component";
import { AnimacionRutaComponent } from "./Components/animacion-ruta/animacion-ruta.component";
import { PageNotFoundComponent } from "./Components/page-not-found/page-not-found.component";
import { HeroesComponent } from "./Components/heroes/heroes.component";

const routes: Routes = [
  {path: 'animaciones', component: FigurasComponent, data: {animation: 'HomePage '} },
  {path: 'animacionRuta', component: AnimacionRutaComponent, data: {animation: 'AboutPage'}},
  {path: 'heroes', component: HeroesComponent},
  {path: '' , redirectTo: 'animaciones', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
