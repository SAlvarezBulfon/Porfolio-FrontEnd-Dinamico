import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarSkillComponent } from './agregar-skill.component';

describe('AgregarSkillComponent', () => {
  let component: AgregarSkillComponent;
  let fixture: ComponentFixture<AgregarSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
