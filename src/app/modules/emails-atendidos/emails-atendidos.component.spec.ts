import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsAtendidosComponent } from './emails-atendidos.component';

describe('EmailsAtendidosComponent', () => {
  let component: EmailsAtendidosComponent;
  let fixture: ComponentFixture<EmailsAtendidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailsAtendidosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailsAtendidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
