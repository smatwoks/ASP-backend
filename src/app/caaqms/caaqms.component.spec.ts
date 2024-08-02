import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaaqmsComponent } from './caaqms.component';

describe('CaaqmsComponent', () => {
  let component: CaaqmsComponent;
  let fixture: ComponentFixture<CaaqmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaaqmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaaqmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
