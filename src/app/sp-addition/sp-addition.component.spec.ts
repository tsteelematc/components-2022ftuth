import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SPAdditionComponent } from './sp-addition.component';

describe('SPAdditionComponent', () => {
  let component: SPAdditionComponent;
  let fixture: ComponentFixture<SPAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SPAdditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SPAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
