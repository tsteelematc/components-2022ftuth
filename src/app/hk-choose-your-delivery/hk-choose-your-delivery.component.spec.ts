import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HkChooseYourDeliveryComponent } from './hk-choose-your-delivery.component';

describe('HkChooseYourDeliveryComponent', () => {
  let component: HkChooseYourDeliveryComponent;
  let fixture: ComponentFixture<HkChooseYourDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HkChooseYourDeliveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HkChooseYourDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
