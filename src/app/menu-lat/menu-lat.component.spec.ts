import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLatComponent } from './menu-lat.component';

describe('MenuLatComponent', () => {
  let component: MenuLatComponent;
  let fixture: ComponentFixture<MenuLatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuLatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuLatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
