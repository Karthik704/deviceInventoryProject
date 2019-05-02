import { Component, OnInit } from '@angular/core';
import { DeviceServiceService } from "../device-service.service";

@Component({
  selector: 'app-view-device',
  templateUrl: './view-device.component.html',
  styleUrls: ['./view-device.component.css']
})
export class ViewDeviceComponent implements OnInit {

  deviceList: any = [];
  errorMessage: String;
  constructor(private deviceService: DeviceServiceService) { }

  ngOnInit() {
    this.viewDevice();
  }

  viewDevice() {
    this.deviceService.viewDevice().subscribe(
      (success) => {
        // console.log(success,"View Device Data");
        this.deviceList = success;
      },
      (err) => {
        this.errorMessage = err.error.message;
      }
    )
  }
}
