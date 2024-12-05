import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Compte {
  id?: string;
  solde: number;
  dateCreation: string;
  type: 'COURANT' | 'EPARGNE';
}

@Injectable({
  providedIn: 'root',
})
export class CompteService {
  private apiUrl = 'http://localhost:8080/api/compte';

  constructor(private http: HttpClient) {}

  getAllComptes(): Observable<Compte[]> {
    return this.http.get<Compte[]>(this.apiUrl);
  }

  saveCompte(compte: Compte): Observable<Compte> {
    return this.http.post<Compte>(this.apiUrl, compte);
  }
}
