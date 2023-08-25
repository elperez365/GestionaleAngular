import { User } from "../interfaces/user";
import { v4 as uuidv4 } from 'uuid';


export let lista_utenti: User[] = [{
  id: uuidv4(),
  nome: 'Sabri',
  numero: '123456',
  email: 'email1@dom.it',
  password: '123'
},{
  id: uuidv4(),
  nome: 'Vasco',
  numero: '789098',
  email: 'email2@dom.it',
  password: '456'
},{
  id: uuidv4(),
  nome: 'Alessio',
  numero: '135792',
  email: 'email3@dom.it',
  password: '789'
}]