import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Renata } from './renata';

describe('Renata', () => {
  let component: Renata;
  let fixture: ComponentFixture<Renata>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Renata]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Renata);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
