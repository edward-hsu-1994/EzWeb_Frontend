import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DNDBaseComponent } from './dndbase.component';

describe('DNDBaseComponent', () => {
  let component: DNDBaseComponent;
  let fixture: ComponentFixture<DNDBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DNDBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DNDBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
