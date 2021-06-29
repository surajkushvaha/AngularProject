import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMedicineComponent } from './detail-medicine.component';

describe('DetailMedicineComponent', () => {
  let component: DetailMedicineComponent;
  let fixture: ComponentFixture<DetailMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMedicineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
