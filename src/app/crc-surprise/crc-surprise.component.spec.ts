import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrcSurpriseComponent } from './crc-surprise.component';

describe('CrcSurpriseComponent', () => {
  let component: CrcSurpriseComponent;
  let fixture: ComponentFixture<CrcSurpriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrcSurpriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrcSurpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
