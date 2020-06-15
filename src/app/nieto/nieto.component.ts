import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {

  texto: string = '';
  constructor() { }

  ngOnInit() {
  }

  cambiarTexto(txt: string){
    this.texto = txt;
  }
}
