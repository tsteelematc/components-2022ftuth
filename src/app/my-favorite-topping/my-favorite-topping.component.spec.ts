import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFavoriteToppingComponent } from './my-favorite-topping.component';

describe('MyFavoriteToppingComponent', () => {
  let component: MyFavoriteToppingComponent;
  let fixture: ComponentFixture<MyFavoriteToppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFavoriteToppingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFavoriteToppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
