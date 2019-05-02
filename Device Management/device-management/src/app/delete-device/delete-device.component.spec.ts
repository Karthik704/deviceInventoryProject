import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDeviceComponent } from './delete-device.component';

describe('DeleteDeviceComponent', () => {
  let component: DeleteDeviceComponent;
  let fixture: ComponentFixture<DeleteDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
