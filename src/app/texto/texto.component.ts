import { Component, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { PadreComponent } from '../padre/padre.component';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-texto',
  templateUrl: './texto.component.html',
  styleUrls: ['./texto.component.css']
})
export class TextoComponent implements OnInit {

  texto: string = '';
  textArea;
  button;
  @ViewChild(PadreComponent) padre : PadreComponent;
  constructor(private service: ServicioService) { }

  ngOnInit() {
    this.button = document.querySelector('#enviar');
    this.textArea = document.querySelector("#texto");
    fromEvent(this.button, 'click').subscribe(event => {
      console.log(this.textArea.value);
      this.service.compartirTexto(this.textArea.value);
      this.padre.cambiarTexto(this.textArea.value);
    });
  }


}
