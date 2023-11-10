import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypelistComponent } from './typelist/typelist.component';
import { PokemonlistComponent } from './pokemonlist/pokemonlist.component';
import { PokemoninfoComponent } from './pokemoninfo/pokemoninfo.component';

@NgModule({
  declarations: [
    AppComponent,
    TypelistComponent,
    PokemonlistComponent,
    PokemoninfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
