import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechadasComponent } from './fechadas.component';

describe('FechadasComponent', () => {
  let component: FechadasComponent;
  let fixture: ComponentFixture<FechadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FechadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FechadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
