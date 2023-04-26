import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinomeComponent } from './binome.component';

describe('BinomeComponent', () => {
  let component: BinomeComponent;
  let fixture: ComponentFixture<BinomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BinomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BinomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
