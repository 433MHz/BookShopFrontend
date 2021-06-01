import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewCategoriesComponent } from './preview-categories.component';

describe('PreviewCategoriesComponent', () => {
  let component: PreviewCategoriesComponent;
  let fixture: ComponentFixture<PreviewCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
