import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatCardComponent } from './beat-card.component';

describe('BeatCardComponent', () => {
  let component: BeatCardComponent;
  let fixture: ComponentFixture<BeatCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeatCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
