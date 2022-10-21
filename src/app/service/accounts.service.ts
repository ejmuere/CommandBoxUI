import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  listOfClients = [
    {
      'name': "Greg",
      'checking': 500,
      'savings': 1000
    },
    {
      'name': "Nancy",
      'checking': 600,
      'savings': 900
    },
  ];

  constructor() { }

  getClient(name: string) {

  }
  
  getAllClients(rawString: string): Observable<any> {
    return of(this.listOfClients);
  }


}
