import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaordemComponent } from './novaordem.component';

describe('NovaordemComponent', () => {
  let component: NovaordemComponent;
  let fixture: ComponentFixture<NovaordemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaordemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaordemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
