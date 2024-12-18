import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAyudasComponent } from './card-ayudas.component';

describe('CardAyudasComponent', () => {
  let component: CardAyudasComponent;
  let fixture: ComponentFixture<CardAyudasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAyudasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAyudasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
