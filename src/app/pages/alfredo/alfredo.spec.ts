import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alfredo } from './alfredo';

describe('Alfredo', () => {
  let component: Alfredo;
  let fixture: ComponentFixture<Alfredo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alfredo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Alfredo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
