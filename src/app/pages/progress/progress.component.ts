import { Component,  } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent  {

  progreso: number = 20;

  get getPorcentaje(){
    return `${this.progreso}%`;
  }

  cambiarValor(valor: number): 100 | 0 | undefined {
    //validacion para que no pase mas de su rango y tengamos un bug

    if(this.progreso >= 100 && valor >= 0){
      return this.progreso = 100;
    }

    if (this.progreso <= 0 && valor < 0) {
      return this.progreso = 0;
    }

    this.progreso = this.progreso + valor;
  }
  
}
