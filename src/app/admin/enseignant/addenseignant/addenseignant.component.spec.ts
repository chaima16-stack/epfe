import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddenseignantComponent } from './addenseignant.component';

describe('AddenseignantComponent', () => {
  let component: AddenseignantComponent;
  let fixture: ComponentFixture<AddenseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddenseignantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddenseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
