import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarEnlacesSeccionesComponent } from './navbar-enlaces-secciones.component';

describe('NavbarEnlacesSeccionesComponent', () => {
  let component: NavbarEnlacesSeccionesComponent;
  let fixture: ComponentFixture<NavbarEnlacesSeccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarEnlacesSeccionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarEnlacesSeccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
