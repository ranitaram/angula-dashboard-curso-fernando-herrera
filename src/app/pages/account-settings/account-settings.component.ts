import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  //para verlo como una propiedad
  public linkTheme = document.querySelector('#theme');

  constructor() { }

  ngOnInit(): void {
  }

  changeTheme( theme: string){
    
    const url = `./assets/css/colors/${theme}.css`;

    //para cambiar el atributo
    this.linkTheme?.setAttribute('href', url);
    //para guardarlo en el localstorage y se guarda en memoria
    localStorage.setItem('theme', url);

    
  }

}
