import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmcComponent } from './addmc.component';

describe('AddmcComponent', () => {
  let component: AddmcComponent;
  let fixture: ComponentFixture<AddmcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddmcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
