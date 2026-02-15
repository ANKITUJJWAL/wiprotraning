import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksLayout } from './books-layout';

describe('BooksLayout', () => {
  let component: BooksLayout;
  let fixture: ComponentFixture<BooksLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
