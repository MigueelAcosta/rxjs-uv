import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css']
})
export class ExternoComponent implements OnInit {

  texto: String = '';
  constructor(private service: ServicioService) { }

  ngOnInit() {
    this.service.conexion$.subscribe(text => this.texto = text);
  }

}
