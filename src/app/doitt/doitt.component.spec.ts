import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoittComponent } from './doitt.component';

describe('DoittComponent', () => {
  let component: DoittComponent;
  let fixture: ComponentFixture<DoittComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoittComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoittComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
