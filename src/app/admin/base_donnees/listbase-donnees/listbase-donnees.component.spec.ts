import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListbaseDonneesComponent } from './listbase-donnees.component';

describe('ListbaseDonneesComponent', () => {
  let component: ListbaseDonneesComponent;
  let fixture: ComponentFixture<ListbaseDonneesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListbaseDonneesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListbaseDonneesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
