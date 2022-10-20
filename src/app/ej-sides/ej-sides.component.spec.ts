import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjSidesComponent } from './ej-sides.component';

describe('EjSidesComponent', () => {
  let component: EjSidesComponent;
  let fixture: ComponentFixture<EjSidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjSidesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjSidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
