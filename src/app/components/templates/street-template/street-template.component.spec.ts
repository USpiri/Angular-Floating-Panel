import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetTemplateComponent } from './street-template.component';

describe('StreetTemplateComponent', () => {
  let component: StreetTemplateComponent;
  let fixture: ComponentFixture<StreetTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreetTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreetTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
