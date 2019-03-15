import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanaerysComponent } from './danaerys.component';

describe('DanaerysComponent', () => {
  let component: DanaerysComponent;
  let fixture: ComponentFixture<DanaerysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanaerysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanaerysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
