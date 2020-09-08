import { Component, OnInit } from '@angular/core';
import { ContactServiceService } from '../contact-service.service';


@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {

  public contact = {name: "", email: "", description: ""};

  constructor(private contactService: ContactServiceService) { }

  ngOnInit() {
  }

  salvar(){
    this.contactService.post(this.contact).subscribe(r => (this.contact = {name: "", email: "", description: ""}));
  
  }  

}
