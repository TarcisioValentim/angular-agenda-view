import { Component, OnInit } from '@angular/core';
import { ContactServiceService } from '../contact-service.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts = [];
  contactSelecionado;
  constructor(private contactService: ContactServiceService) { }

  ngOnInit() {
    this.contactService.get().subscribe(r => (this.contacts = r));
  }
  selectContact(c){
    this.contactSelecionado = c;
  }

  excluir(id){
    this.contactService.delete(id).subscribe(r => (this.contactService.get().subscribe(r => (this.contacts = r))));
  }

}
