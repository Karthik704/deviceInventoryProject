import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewDeviceComponent } from './view-device/view-device.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { UpdateDeviceComponent } from './update-device/update-device.component';
import { DeleteDeviceComponent } from './delete-device/delete-device.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ViewDeviceComponent,
    DashboardComponent,
    AddDeviceComponent,
    UpdateDeviceComponent,
    DeleteDeviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
