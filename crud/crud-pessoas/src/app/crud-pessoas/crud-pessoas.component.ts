import { Component, OnInit } from '@angular/core';
import { PessoasService } from '../pessoas.service';

@Component({
  selector: 'app-crud-pessoas',
  template: `
            <ul>
              <li *ngFor="let item of pessoas">{{item.nome}} 
                      <button (click)="editar(item)">Alterar</button> 
                      <button (click)="remove(item.id)">X</button></li>
            </ul>

            <input type="hidden" [(ngModel)]="id" /><br>
            Nome: <input type="text" [(ngModel)]="nome" /><br>
            <button *ngIf="status==='inserindo'" (click)="insere()">Inserir</button> 
            <button *ngIf="status==='alterando'" (click)="altera()">Alterar</button>
  `,
  styleUrls: ['./crud-pessoas.component.css']
})
export class CrudPessoasComponent implements OnInit {
  id="";
  nome = "";
  status = "inserindo";
  pessoas = [];

  constructor(private pessoasService:PessoasService) { 

  }

  ngOnInit() {
    this.atualiza();
  }

  editar(i) {
    this.id = i.id;
    this.nome = i.nome;
    this.status = "alterando";
  }

  atualiza() {
    this.pessoasService.consultar().then(
      pessoas=> {
        this.pessoas=pessoas;
      }      
    );
  }

  insere() {
    this.pessoasService.inserir(this.nome).then(()=>{
      this.nome = "";
      this.id = "";
      this.atualiza();
    });
  }

  remove(id) {
    this.pessoasService.remover(id).then(()=>{
      this.nome="";
      this.id="";
      this.atualiza();
    });
  }

  altera(id, nome) {
    this.pessoasService.alterar(this.id, this.nome).then(()=>{
      this.nome="";
      this.id="";
      this.status="inserindo";
      this.atualiza();
    }); 
  }

}
