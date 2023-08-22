import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuovo-mezzo',
  templateUrl: './nuovo-mezzo.component.html',
  styleUrls: ['./nuovo-mezzo.component.scss']
})
export class NuovoMezzoComponent {
selectedMese:String
selectedPatente:string
patenti=[{
  value: 'a',
  viewValue: 'A',
},{
  value: 'b',
  viewValue: 'B',
},{
  value: 'a',
  viewValue: 'C',
},{
  value: 'a',
  viewValue: 'D',
},{
  value: 'a',
  viewValue: 'E',
},]
mesi = [
  {
    value: 'gennaio',
    viewValue: 'GENNAIO',
  },
  {
    value: 'febbraio',
    viewValue: 'FABBRAIO',
  },
  {
    value: 'marzo',
    viewValue: 'MARZO',
  },
  {
    value: 'aprile',
    viewValue: 'APRILE',
  },
  {
    value: 'maggio',
    viewValue: 'MAGGIO',
  },
  {
    value: 'giugno',
    viewValue: 'GIUGNO',
  },
  {
    value: 'luglio',
    viewValue: 'LUGLIO',
  },
  {
    value: 'agosto',
    viewValue: 'AGOSTO',
  },
  {
    value: 'settembre',
    viewValue: 'SETTEMBRE',
  },
  {
    value: 'ottobre',
    viewValue: 'OTTOBRE',
  },
  {
    value: 'novembre',
    viewValue: 'NOVEMBRE',
  },
  {
    value: 'dicembre',
    viewValue: 'DICEMBRE',
  },

];

mezzoForm:FormGroup

ngOnInit(): void {
 this.mezzoForm=new FormGroup({
  tipoVeicolo:new FormControl("",Validators.required),
  targa:new FormControl("",Validators.required),
  annoRevisione:new FormControl("",Validators.required),
  meseRevisione:new FormControl("",Validators.required),
  note:new FormControl("",Validators.required),
  tipoPatente:new FormControl("",Validators.required),
  assicurazione:new FormControl("",Validators.required),
  scadenzaAssicurazione:new FormControl("",Validators.required),
  scadenzaBollo:new FormControl("",Validators.required),
 })
}


onSubmit(event:any){
  console.log(this.mezzoForm)
   }
}

