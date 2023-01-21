import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  
})
export class PagesComponent implements OnInit {

  public linkTheme = document.querySelector('#theme');

  constructor() { }

  ngOnInit(): void {
    //href="./assets/css/colors/default-dark.css"

    const url = localStorage.getItem('theme') || './assets/css/colors/purple.css'
    

    //para cambiar el atributo
    this.linkTheme?.setAttribute('href', url);
    
    

  }

}
