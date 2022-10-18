import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurpriseSideComponent } from './surprise-side.component';

describe('SurpriseSideComponent', () => {
  let component: SurpriseSideComponent;
  let fixture: ComponentFixture<SurpriseSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurpriseSideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurpriseSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
