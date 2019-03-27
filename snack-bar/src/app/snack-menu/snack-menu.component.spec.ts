import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackMenuComponent } from './snack-menu.component';

describe('SnackMenuComponent', () => {
  let component: SnackMenuComponent;
  let fixture: ComponentFixture<SnackMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
