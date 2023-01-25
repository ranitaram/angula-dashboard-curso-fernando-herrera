import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');

  constructor() {
    //href="./assets/css/colors/default-dark.css"

    const url = localStorage.getItem('theme') || './assets/css/colors/purple.css'
    

    //para cambiar el atributo
    this.linkTheme?.setAttribute('href', url);
   }

   changeTheme( theme: string){
    
    const url = `./assets/css/colors/${theme}.css`;

    //para cambiar el atributo
    this.linkTheme?.setAttribute('href', url);
    //para guardarlo en el localstorage y se guarda en memoria
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
  }
  checkCurrentTheme(){
    
    const links = document.querySelectorAll('.selector');
    //para barrer los elementos y exponer el elemento html uno por 1

    links.forEach(elem => {
      elem.classList.remove('working');

      //obteniendo el valor del atributo que esta en el data-theme del html
      const btnTheme = elem.getAttribute('data-theme');
      //de esta manera construimos el url
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      //ahora lo necsitamos extraer
      const currentTheme = this.linkTheme?.getAttribute('href');


      if (btnThemeUrl === currentTheme) {
        elem.classList.add('working');
      }
    })
  }
}
