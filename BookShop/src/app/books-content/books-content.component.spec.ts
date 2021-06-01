import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksContentComponent } from './books-content.component';

describe('BooksContentComponent', () => {
  let component: BooksContentComponent;
  let fixture: ComponentFixture<BooksContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
