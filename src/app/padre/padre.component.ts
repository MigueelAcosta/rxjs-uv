import { Component, OnInit, ViewChild } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  texto: string = '';
  @ViewChild(HijoComponent) hijo :HijoComponent;
  constructor() { }

  ngOnInit() {
  }

  cambiarTexto(txt: string){
    this.texto = txt;
    this.hijo.cambiarTexto(txt);
  }

}
