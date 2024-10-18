import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistenciaComponent } from './resistencia.component';

describe('ResistenciaComponent', () => {
  let component: ResistenciaComponent;
  let fixture: ComponentFixture<ResistenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResistenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
