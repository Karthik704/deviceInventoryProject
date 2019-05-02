import { Component, OnInit } from '@angular/core';
import { DeviceServiceService } from "../device-service.service";

@Component({
  selector: 'app-delete-device',
  templateUrl: './delete-device.component.html',
  styleUrls: ['./delete-device.component.css']
})
export class DeleteDeviceComponent implements OnInit {

  deviceList:any = [];
  errorMessage:String;
  constructor(private deviceService: DeviceServiceService) { }

  ngOnInit() {
    this.viewDevice();
  }

  viewDevice() {
    this.deviceService.viewDevice().subscribe(
      (success) => {
        this.deviceList = success;
      },
      (err) => {
        this.errorMessage = err.error.message;
      }
    )
  }

  deleteDevice(deviceId) {
    this.deviceService.deleteDevice(deviceId).subscribe(
      (success) => {
        this.viewDevice();
        alert(success);
      },
      (err) => {
        this.errorMessage = err.error.message;
      }
    )
  }
}
