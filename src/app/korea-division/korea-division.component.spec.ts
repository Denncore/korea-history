import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoreaDivisionComponent } from './korea-division.component';

describe('KoreaDivisionComponent', () => {
  let component: KoreaDivisionComponent;
  let fixture: ComponentFixture<KoreaDivisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KoreaDivisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KoreaDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
