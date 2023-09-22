import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromthemComponent } from './fromthem.component';

describe('FromthemComponent', () => {
  let component: FromthemComponent;
  let fixture: ComponentFixture<FromthemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FromthemComponent]
    });
    fixture = TestBed.createComponent(FromthemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
