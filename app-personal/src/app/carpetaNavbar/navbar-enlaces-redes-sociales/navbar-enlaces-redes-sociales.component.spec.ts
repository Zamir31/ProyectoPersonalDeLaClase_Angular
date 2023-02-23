import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarEnlacesRedesSocialesComponent } from './navbar-enlaces-redes-sociales.component';

describe('NavbarEnlacesRedesSocialesComponent', () => {
  let component: NavbarEnlacesRedesSocialesComponent;
  let fixture: ComponentFixture<NavbarEnlacesRedesSocialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarEnlacesRedesSocialesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarEnlacesRedesSocialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
