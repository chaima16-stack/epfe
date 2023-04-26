import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodeConceptionComponent } from './methode-conception.component';

describe('MethodeConceptionComponent', () => {
  let component: MethodeConceptionComponent;
  let fixture: ComponentFixture<MethodeConceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MethodeConceptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MethodeConceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
