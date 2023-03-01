import { Component } from '@angular/core';
import { IEnlace } from '../IEnlace';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  enlace: IEnlace = {
    nombreEnlace: 'Google',
    urlEnlace: 'http://google.com'
  }

}
