import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftNavMenuComponent } from './left-nav-menu.component';

describe('LeftNavMenuComponent', () => {
  let component: LeftNavMenuComponent;
  let fixture: ComponentFixture<LeftNavMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftNavMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftNavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
