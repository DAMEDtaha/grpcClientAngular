import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CompteAddComponent } from './components/compte-add/compte-add.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    CompteAddComponent // Déclaration du composant
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes) // Configuration des routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
