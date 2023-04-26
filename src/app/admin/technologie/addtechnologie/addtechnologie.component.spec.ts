import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtechnologieComponent } from './addtechnologie.component';

describe('AddtechnologieComponent', () => {
  let component: AddtechnologieComponent;
  let fixture: ComponentFixture<AddtechnologieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtechnologieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtechnologieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
