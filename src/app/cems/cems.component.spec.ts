import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CemsComponent } from './cems.component';

describe('CemsComponent', () => {
  let component: CemsComponent;
  let fixture: ComponentFixture<CemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
