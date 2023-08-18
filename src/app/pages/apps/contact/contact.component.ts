import { Component, OnInit, Inject, Optional } from '@angular/core';


export interface ContactData {
  
}

@Component({
  templateUrl: './contact.component.html',
})
export class AppContactComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-dialog-content',
  templateUrl: 'contact-dialog-content.html',
})

export class AppContactDialogContentComponent {
  
}
