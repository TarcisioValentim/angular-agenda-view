import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  constructor(private http: HttpClient) { }

  public get(): Observable<any> {
    return this.http.get("http://localhost:8080/contact")
  }
  public post(contact): Observable<any> {
    return this.http.post("http://localhost:8080/contact", contact);
  }
  public delete(id): Observable<any> {
    return this.http.delete(`http://localhost:8080/contact/${id}`)
  }
}
