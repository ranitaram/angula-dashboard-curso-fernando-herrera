import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {
  
  ngOnInit(){
    this.btnClass = `btn ${this.btnClass}`;
  }

  //este metodo para renombrar valores
  @Input('valor') progreso: number = 40; 
  //@Input() progreso: number = 50;

  //clase del btn para cambiar de color el menos y mas del progress
  @Input() btnClass: string = 'btn-primary';



  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  // get getPorcentaje(){
  //   return `${this.progreso}%`;
  // }

  cambiarValor(valor: number): 100 | 0 | undefined {
    //validacion para que no pase mas de su rango y tengamos un bug

    if(this.progreso >= 100 && valor >= 0){
      this.valorSalida.emit(100);
      return this.progreso = 100;
    }

    if (this.progreso <= 0 && valor < 0) {
      this.valorSalida.emit(0);
      return this.progreso = 0;
    }
    
    this.progreso = this.progreso + valor;
    this.valorSalida.emit(this.progreso);
  }

}
