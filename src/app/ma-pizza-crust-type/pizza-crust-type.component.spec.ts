import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaCrustTypeComponent } from './pizza-crust-type.component';

describe('PizzaCrustTypeComponent', () => {
  let component: PizzaCrustTypeComponent;
  let fixture: ComponentFixture<PizzaCrustTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaCrustTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaCrustTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
