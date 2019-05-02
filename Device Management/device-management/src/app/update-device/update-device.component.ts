import { Component, OnInit } from '@angular/core';
import { DeviceServiceService } from "../device-service.service";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-device',
  templateUrl: './update-device.component.html',
  styleUrls: ['./update-device.component.css']
})
export class UpdateDeviceComponent implements OnInit {

  deviceList: any = [];
  errorMessage: String;
  updateDeviceForm: FormGroup;
  constructor(private fb: FormBuilder,private deviceService: DeviceServiceService) { }

  ngOnInit() {
    this.updateDeviceForm = this.fb.group({
      deviceId: ['', [Validators.required, Validators.minLength(6)]],
      // password: ['', [Validators.required, Validators.pattern(/^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!,@,#,$,%,^,&,*]).{7,20})$/)]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      allocatedTo: ['', [Validators.required, Validators.minLength(3)]]
    });
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
  updateDevice(deviceId) {
    let device = {
      deviceId:deviceId,
      name:this.updateDeviceForm.controls.name.value,
      allocatedTo:this.updateDeviceForm.controls.allocatedTo.value
    }
    this.deviceService.updateDevice(device).subscribe(
      (success) => {
        alert("Device Updated");
        this.viewDevice();
      },
      (err) => {
        this.errorMessage = err.error.message;
      }
    )
  }
}
