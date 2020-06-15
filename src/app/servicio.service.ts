import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private mensajero = new Subject<String>();
  public conexion$ = this.mensajero.asObservable();

  constructor() { }

  compartirTexto(text: string){
    this.mensajero.next(text);
  }
}
