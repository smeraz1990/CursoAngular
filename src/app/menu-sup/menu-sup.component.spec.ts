import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSupComponent } from './menu-sup.component';

describe('MenuSupComponent', () => {
  let component: MenuSupComponent;
  let fixture: ComponentFixture<MenuSupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
