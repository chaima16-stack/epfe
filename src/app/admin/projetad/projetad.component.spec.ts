import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetadComponent } from './projetad.component';

describe('ProjetadComponent', () => {
  let component: ProjetadComponent;
  let fixture: ComponentFixture<ProjetadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
