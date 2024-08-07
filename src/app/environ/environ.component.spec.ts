import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironComponent } from './environ.component';

describe('EnvironComponent', () => {
  let component: EnvironComponent;
  let fixture: ComponentFixture<EnvironComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvironComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvironComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
