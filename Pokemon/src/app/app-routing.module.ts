import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypelistComponent } from './typelist/typelist.component';
import { PokemonlistComponent } from './pokemonlist/pokemonlist.component';
import { PokemoninfoComponent } from './pokemoninfo/pokemoninfo.component';

const routes: Routes = [
  { path: '', redirectTo: "typelist", pathMatch: 'full'},
  { path: 'typelist', component: TypelistComponent },
  {path: 'pokemon/:id', component: PokemonlistComponent},
  { path: 'pokemoninfo/:id', component: PokemoninfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
