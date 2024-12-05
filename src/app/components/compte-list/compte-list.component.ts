import { Component, OnInit } from '@angular/core';
import { CompteService, Compte } from '../../services/compte.service';

@Component({
  selector: 'app-compte-list',
  templateUrl: './compte-list.component.html',
})
export class CompteListComponent implements OnInit {
  comptes: Compte[] = [];

  constructor(private compteService: CompteService) {}

  ngOnInit(): void {
    this.compteService.getAllComptes().subscribe((data) => {
      this.comptes = data;
    });
  }
}
