import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalFrameComponent } from './external-frame.component';

describe('ExternalFrameComponent', () => {
  let component: ExternalFrameComponent;
  let fixture: ComponentFixture<ExternalFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalFrameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
