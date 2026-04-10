import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherComp } from './another-comp';

describe('AnotherComp', () => {
  let component: AnotherComp;
  let fixture: ComponentFixture<AnotherComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnotherComp],
    }).compileComponents();

    fixture = TestBed.createComponent(AnotherComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
