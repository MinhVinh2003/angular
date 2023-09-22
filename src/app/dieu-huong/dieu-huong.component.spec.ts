import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DieuHuongComponent } from './dieu-huong.component';

describe('DieuHuongComponent', () => {
  let component: DieuHuongComponent;
  let fixture: ComponentFixture<DieuHuongComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DieuHuongComponent]
    });
    fixture = TestBed.createComponent(DieuHuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
