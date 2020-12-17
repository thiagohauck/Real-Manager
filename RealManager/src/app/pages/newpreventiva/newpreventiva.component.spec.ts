import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpreventivaComponent } from './newpreventiva.component';

describe('NewpreventivaComponent', () => {
  let component: NewpreventivaComponent;
  let fixture: ComponentFixture<NewpreventivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewpreventivaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpreventivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
