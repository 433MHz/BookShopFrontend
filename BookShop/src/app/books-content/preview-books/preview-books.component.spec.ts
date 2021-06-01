import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewBooksComponent } from './preview-books.component';

describe('PreviewBooksComponent', () => {
  let component: PreviewBooksComponent;
  let fixture: ComponentFixture<PreviewBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
