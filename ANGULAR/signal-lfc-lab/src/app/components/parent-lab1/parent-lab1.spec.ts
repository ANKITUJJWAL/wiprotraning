import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentLab1 } from './parent-lab1';

describe('ParentLab1', () => {
  let component: ParentLab1;
  let fixture: ComponentFixture<ParentLab1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentLab1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentLab1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
