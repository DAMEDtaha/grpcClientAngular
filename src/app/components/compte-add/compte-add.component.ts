import { Component } from '@angular/core';

@Component({
  selector: 'app-compte-add',
  templateUrl: './compte-add.component.html'
})
export class CompteAddComponent {
  compte = {
    solde: 0,
    dateCreation: new Date(),
    type: ''
  };

  saveCompte() {
    console.log('Compte sauvegardé :', this.compte);
    // Logique de sauvegarde à compléter ici
  }
}
