import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  constructor(private http:Http) { 
    
  }

  consultar(){
    return this.http.get("http://localhost:3000/pessoa").toPromise().then(resposta=>resposta.json());
  }

  inserir(nome:string) {
    return this.http.post("http://localhost:3000/pessoa", {nome:nome}).toPromise();
  }

  remover(id:string) {
    return this.http.delete(`http://localhost:3000/pessoa/${id}`).toPromise();
  }

  alterar(id: string, nome: string) {
    return this.http.put(`http://localhost:3000/pessoa/${id}`, {nome:nome}).toPromise();
  }
}
