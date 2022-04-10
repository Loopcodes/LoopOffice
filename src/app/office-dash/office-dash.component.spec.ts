import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeDashComponent } from './office-dash.component';

describe('OfficeDashComponent', () => {
  let component: OfficeDashComponent;
  let fixture: ComponentFixture<OfficeDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
