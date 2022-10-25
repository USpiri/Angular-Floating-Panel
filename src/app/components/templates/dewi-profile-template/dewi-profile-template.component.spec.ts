import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DewiProfileTemplateComponent } from './dewi-profile-template.component';

describe('DewiProfileTemplateComponent', () => {
  let component: DewiProfileTemplateComponent;
  let fixture: ComponentFixture<DewiProfileTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DewiProfileTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DewiProfileTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
