import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbaseDonneesComponent } from './addbase-donnees.component';

describe('AddbaseDonneesComponent', () => {
  let component: AddbaseDonneesComponent;
  let fixture: ComponentFixture<AddbaseDonneesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbaseDonneesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddbaseDonneesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
