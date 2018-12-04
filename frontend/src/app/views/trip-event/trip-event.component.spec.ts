import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripEventComponent } from './trip-event.component';

describe('TripEventComponent', () => {
  let component: TripEventComponent;
  let fixture: ComponentFixture<TripEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
