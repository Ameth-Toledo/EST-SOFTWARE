import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEmailsComponent } from './card-emails.component';

describe('CardEmailsComponent', () => {
  let component: CardEmailsComponent;
  let fixture: ComponentFixture<CardEmailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardEmailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardEmailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
