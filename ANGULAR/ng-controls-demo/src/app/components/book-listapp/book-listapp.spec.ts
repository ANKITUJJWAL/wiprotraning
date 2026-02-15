import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListapp } from './book-listapp';

describe('BookListapp', () => {
  let component: BookListapp;
  let fixture: ComponentFixture<BookListapp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookListapp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookListapp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
