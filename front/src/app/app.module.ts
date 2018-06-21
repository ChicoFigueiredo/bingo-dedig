import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { CartelaComponent } from './components/cartela/cartela.component';
import { ListaCartelaComponent } from './components/lista-cartela/lista-cartela.component';
import { SorteadorComponent } from './components/sorteador/sorteador.component';
import { BroadcastBingoService } from './services/broadcast-bingo.service';

const appRoutes: Routes = [
  { path: '', component: ListaCartelaComponent },
  { path: 'sorteador', component: SorteadorComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CartelaComponent,
    ListaCartelaComponent,
    SorteadorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // new modules added here
    RouterModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [
    BroadcastBingoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
