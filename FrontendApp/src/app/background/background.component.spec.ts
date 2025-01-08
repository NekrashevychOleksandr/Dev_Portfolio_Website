import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuralBackgroundComponent } from './background.component';

describe('BackgroundComponent', () => {
  let component: NeuralBackgroundComponent;
  let fixture: ComponentFixture<NeuralBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeuralBackgroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeuralBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
