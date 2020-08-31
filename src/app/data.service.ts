import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  contacts = [
    {id: 1, name: "tarcisio", description: "admin", email: "admin@gmail.com"},
    {id: 2, name: "jemi", description: "user", email: "user@gmail.com"},
    {id: 3, name: "misk", description: "user2", email: "misk@gmail.com"},
    {id: 4, name: "cooper", description: "user3", email: "cooper@gmail.com"}
  ];
  constructor() { }

  public getContacts(){
    return this.contacts;
  }

  public createContacts(contact: {id, name, description, email}){
    this.contacts.push(contact);
  }
}
