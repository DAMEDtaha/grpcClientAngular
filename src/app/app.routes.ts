import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CompteAddComponent } from './components/compte-add/compte-add.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'add-compte', component: CompteAddComponent }
];
