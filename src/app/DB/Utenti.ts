import { User } from "../interfaces/user";
import { v4 as uuidv4 } from 'uuid';


export let lista_utenti: User[] = [{
  id: uuidv4(),
  nome: 'admin',
  numero: '123456',
  email: 'email1@dom.it',
  password: '123'
}]