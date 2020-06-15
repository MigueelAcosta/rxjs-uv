import { Component, OnInit, ViewChild } from '@angular/core';
import { NietoComponent } from '../nieto/nieto.component';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  texto: string = '';
  @ViewChild(NietoComponent) nieto : NietoComponent;
  constructor() { }

  ngOnInit() {
  }

  cambiarTexto(txt: string){
    this.texto = txt;
    this.nieto.cambiarTexto(txt);
  }

}
