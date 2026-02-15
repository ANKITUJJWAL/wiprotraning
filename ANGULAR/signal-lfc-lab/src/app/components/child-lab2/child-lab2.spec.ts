import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildLab2 } from './child-lab2';

describe('ChildLab2', () => {
  let component: ChildLab2;
  let fixture: ComponentFixture<ChildLab2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildLab2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildLab2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
