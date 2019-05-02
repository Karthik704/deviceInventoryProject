import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DeviceServiceService } from "../device-service.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {
  addDeviceForm: FormGroup;
  errorMessage:String;
  constructor(private fb: FormBuilder,private deviceService: DeviceServiceService, private router:Router) { }

  ngOnInit() {
    this.addDeviceForm = this.fb.group({
      deviceId: ['', [Validators.required]],
      // password: ['', [Validators.required, Validators.pattern(/^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!,@,#,$,%,^,&,*]).{7,20})$/)]],
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]*[a-zA-Z\s]*[a-zA-Z]$/)]],
      allocatedTo: ['', [Validators.required]]
    });
  }

  addDevice() {
    let device = { 
      deviceId:this.addDeviceForm.controls.deviceId.value,
      name:this.addDeviceForm.controls.name.value,
      allocatedTo:this.addDeviceForm.controls.allocatedTo.value
    }
    this.deviceService.addDevice(device).subscribe(
      (success) => {
        alert(success.name+" added")
        this.router.navigate(['view']);
      },
      (err) => {
        this.errorMessage = err.error.message;
      }
    )
  }
}
