import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { ResponseBody } from '../model/response';

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

  getControllerResponse(input: string ): Observable<ResponseBody> { 
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>("http://localhost:8080/intent/postCommand", {"message" : input},{headers: headers});
  }
  


}
