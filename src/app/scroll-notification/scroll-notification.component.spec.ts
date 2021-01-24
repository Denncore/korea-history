import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollNotificationComponent } from './scroll-notification.component';

describe('ScrollNotificationComponent', () => {
  let component: ScrollNotificationComponent;
  let fixture: ComponentFixture<ScrollNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
