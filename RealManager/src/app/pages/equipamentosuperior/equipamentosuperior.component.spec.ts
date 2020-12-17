import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipamentosuperiorComponent } from './equipamentosuperior.component';

describe('EquipamentosuperiorComponent', () => {
  let component: EquipamentosuperiorComponent;
  let fixture: ComponentFixture<EquipamentosuperiorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipamentosuperiorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipamentosuperiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
