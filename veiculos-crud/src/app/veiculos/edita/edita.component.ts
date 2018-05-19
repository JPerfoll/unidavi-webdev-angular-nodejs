import { Component, OnInit } from '@angular/core';
import { VeiculosService } from '../veiculos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edita',
  templateUrl: './edita.component.html',
  styleUrls: ['./edita.component.css']
})
export class EditaComponent implements OnInit {

  item = {};
  id: any;

  constructor(private veiculosService: VeiculosService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.carrega(params['id']);
    })
  }

  carrega(id: String) {
    this.id = id;
    if (this.id === "novo") {
      return;
    }
    this.veiculosService.get(id).valueChanges().subscribe(
      obj => {
        this.item = obj
      }
    );
  }

  onSubmit(form: NgForm) {
    if (this.id === "novo") {
      this.veiculosService.add(this.item);
    }
    else {
      this.veiculosService.update(this.id, this.item);
    }
    this.router.navigate(['../..'], { relativeTo: this.route })
  }

}
