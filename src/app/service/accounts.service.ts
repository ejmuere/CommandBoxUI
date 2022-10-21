import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 

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

  constructor(
    private http: HttpClient
  ) { }

  getClient(name: string) {

  }

  getControllerResponse(input: any ): Observable<any> { 
    return this.http.post<any>("localhost:8080/intent/postCommand", input);
  }
  
  getAllClients(rawString: string): Observable<any> {
    return of(this.listOfClients);
  }


}
