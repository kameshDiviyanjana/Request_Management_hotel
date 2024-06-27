import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogingComponent } from './loging.component';

describe('LogingComponent', () => {
  let component: LogingComponent;
  let fixture: ComponentFixture<LogingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogingComponent]
    });
    fixture = TestBed.createComponent(LogingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
