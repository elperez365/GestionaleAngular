import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from './to-do/todo.service';
import { ToDo } from './to-do/todo';


@Component({
  selector: 'app-nuova-impresa',
  templateUrl: './nuova-impresa.component.html',
  styleUrls: ['./nuova-impresa.component.scss']
})
export class NuovaImpresaComponent {

  todos: ToDo[] = this.todoService.getTodos();
  constructor(
    
    public todoService: TodoService,
    
  ) {
    
  }
  stazioneForm:FormGroup

ngOnInit(): void {
 this.stazioneForm=new FormGroup({
  nome:new FormControl("",Validators.required),
  contattoPrincipale:new FormControl("",Validators.required),
  nomeContatto:new FormControl("",Validators.required),
  email:new FormControl("",Validators.required),
  
 })
}

onSubmit(event:any){
  console.log(this.stazioneForm.value)
  console.log(this.todos)
}
}
