import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './character/character.component';
import { CharacterInfoComponent } from './character-info/character-info.component';

const routes: Routes = [
  { path: '', redirectTo: "character", pathMatch: 'full'},
  { path: 'character', component: CharacterComponent },
  {path: 'characterInfo/:id', component: CharacterInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
