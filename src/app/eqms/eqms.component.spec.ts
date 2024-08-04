import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EqmsComponent } from './eqms.component';

describe('EqmsComponent', () => {
  let component: EqmsComponent;
  let fixture: ComponentFixture<EqmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EqmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EqmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
