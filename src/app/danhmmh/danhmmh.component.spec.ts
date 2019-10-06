import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhmmhComponent } from './danhmmh.component';

describe('DanhmmhComponent', () => {
  let component: DanhmmhComponent;
  let fixture: ComponentFixture<DanhmmhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhmmhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhmmhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
