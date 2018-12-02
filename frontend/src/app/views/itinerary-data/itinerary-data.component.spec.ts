import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ItineraryDataComponent } from './itinerary-data.component';

describe('ItineraryDataComponent', () => {
  let component: ItineraryDataComponent;
  let fixture: ComponentFixture<ItineraryDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItineraryDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItineraryDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
