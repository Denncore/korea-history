import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoreaPrehistoryComponent } from './korea-prehistory.component';

describe('KoreaPrehistoryComponent', () => {
  let component: KoreaPrehistoryComponent;
  let fixture: ComponentFixture<KoreaPrehistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KoreaPrehistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KoreaPrehistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
