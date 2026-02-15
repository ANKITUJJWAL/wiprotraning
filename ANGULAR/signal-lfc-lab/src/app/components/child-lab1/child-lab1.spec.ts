import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildLab1 } from './child-lab1';

describe('ChildLab1', () => {
  let component: ChildLab1;
  let fixture: ComponentFixture<ChildLab1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildLab1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildLab1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
