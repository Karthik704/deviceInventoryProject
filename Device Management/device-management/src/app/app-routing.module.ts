import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewDeviceComponent } from './view-device/view-device.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { UpdateDeviceComponent } from './update-device/update-device.component';
import { DeleteDeviceComponent } from './delete-device/delete-device.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'view', component: ViewDeviceComponent },
  { path: 'add', component: AddDeviceComponent },
  { path: 'update', component: UpdateDeviceComponent },
  { path: 'delete', component: DeleteDeviceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
