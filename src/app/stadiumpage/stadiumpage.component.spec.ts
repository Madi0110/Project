import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StadiumpageComponent } from './stadiumpage.component';

describe('StadiumpageComponent', () => {
  let component: StadiumpageComponent;
  let fixture: ComponentFixture<StadiumpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StadiumpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StadiumpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
