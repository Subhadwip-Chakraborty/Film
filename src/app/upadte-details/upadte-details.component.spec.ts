import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpadteDetailsComponent } from './upadte-details.component';

describe('UpadteDetailsComponent', () => {
  let component: UpadteDetailsComponent;
  let fixture: ComponentFixture<UpadteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpadteDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpadteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
