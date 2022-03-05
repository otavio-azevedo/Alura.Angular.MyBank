import { Transference } from './../models/transference.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class TransferService {

  private url = 'http://localhost:3000/transferences';

  constructor(private httpClient: HttpClient) {

  }

  add(transference: Transference): Observable<Transference> {
    const transfer = { ...transference, date: new Date() };
    return this.httpClient.post<Transference>(this.url, transfer);
  }

  getAllTransferences(): Observable<Transference[]> {
    return this.httpClient.get<Transference[]>(this.url);
  }

}
