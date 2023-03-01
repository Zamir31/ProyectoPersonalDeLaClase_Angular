import { Component, Input } from '@angular/core';
import { IEnlace } from '../IEnlace';

@Component({
  selector: 'app-navbar-enlaces-redes-sociales',
  templateUrl: './navbar-enlaces-redes-sociales.component.html',
  styleUrls: ['./navbar-enlaces-redes-sociales.component.css']
})
export class NavbarEnlacesRedesSocialesComponent {
  @Input() enlace? : IEnlace
}
