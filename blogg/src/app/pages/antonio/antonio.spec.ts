import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Antonio } from './antonio';

describe('Antonio', () => {
  let component: Antonio;
  let fixture: ComponentFixture<Antonio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Antonio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Antonio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
