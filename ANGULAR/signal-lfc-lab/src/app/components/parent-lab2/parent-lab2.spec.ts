import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentLab2 } from './parent-lab2';

describe('ParentLab2', () => {
  let component: ParentLab2;
  let fixture: ComponentFixture<ParentLab2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentLab2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentLab2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
