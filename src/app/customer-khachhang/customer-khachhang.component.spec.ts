import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerKhachhangComponent } from './customer-khachhang.component';

describe('CustomerKhachhangComponent', () => {
  let component: CustomerKhachhangComponent;
  let fixture: ComponentFixture<CustomerKhachhangComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerKhachhangComponent]
    });
    fixture = TestBed.createComponent(CustomerKhachhangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
