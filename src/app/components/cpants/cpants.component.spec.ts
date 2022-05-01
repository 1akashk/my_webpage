import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpantsComponent } from './cpants.component';

describe('CpantsComponent', () => {
  let component: CpantsComponent;
  let fixture: ComponentFixture<CpantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
