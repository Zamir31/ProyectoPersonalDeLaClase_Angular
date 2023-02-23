import { Component } from '@angular/core';
import { IEnlace } from '../IEnlace';
import { IEnlaces } from '../IEnlaces';

@Component({
  selector: 'app-navbar-enlaces-secciones',
  templateUrl: './navbar-enlaces-secciones.component.html',
  styleUrls: ['./navbar-enlaces-secciones.component.css']
})
export class NavbarEnlacesSeccionesComponent implements IEnlaces, IEnlace {
  enlaces: IEnlace[] = [
    {
      nombreEnlace : 'Google',
      iconoUrl : 'https://img.freepik.com/iconos-gratis/buscar_318-265146.jpg',
      urlEnlace : 'http://www.google.com'
    },
    {
      nombreEnlace : 'Github',
      iconoUrl : 'https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png',
      urlEnlace : 'http://www.github.com'
    }
  ];

  nombreEnlace: string = '';
  iconoUrl?: string | undefined;
  urlEnlace: string = '';

  constructor(){
    
  }

  InsertarEnlaces(_nombre : string, _url : string, _iconoUrl : string): void {
    this.nombreEnlace = _nombre;
    this.iconoUrl = _iconoUrl;
    this.urlEnlace = _url;

    let objEnlace = {
      nombreEnlace : this.nombreEnlace,
      iconoUrl : this.iconoUrl,
      urlEnlace : this.urlEnlace
    };

    this.enlaces.push(objEnlace);
  }

}

