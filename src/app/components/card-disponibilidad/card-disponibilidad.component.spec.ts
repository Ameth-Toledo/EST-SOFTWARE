import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDisponibilidadComponent } from './card-disponibilidad.component';

describe('CardDisponibilidadComponent', () => {
  let component: CardDisponibilidadComponent;
  let fixture: ComponentFixture<CardDisponibilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDisponibilidadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDisponibilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
