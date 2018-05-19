import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Injectable({
  providedIn: 'root'
})

export class VeiculosService {

  private path: string = 'veiculos';

  constructor(public firebaseService: FirebaseService) { 

  }

  list() {
    return this.firebaseService.getList(this.path);
  }

  get(id) {
    return this.firebaseService.getObject(`${this.path}/${id}`);
  }
  add(doc) {
    return this.firebaseService.addItem(this.path, doc);
  }
  update(id, doc) {
    return this.firebaseService.updateItem(`${this.path}/${id}`, doc);
  }
  remove(id) {
    return this.firebaseService.removeItem(this.path, id);
  }
} 
