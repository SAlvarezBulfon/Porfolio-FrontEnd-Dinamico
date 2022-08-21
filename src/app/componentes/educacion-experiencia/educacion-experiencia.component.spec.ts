import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionExperienciaComponent } from './educacion-experiencia.component';

describe('EducacionExperienciaComponent', () => {
  let component: EducacionExperienciaComponent;
  let fixture: ComponentFixture<EducacionExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionExperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
