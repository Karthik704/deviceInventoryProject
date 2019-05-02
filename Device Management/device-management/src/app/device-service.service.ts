import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceServiceService {

  url = "http://localhost:3000/device/";
  constructor(private http: HttpClient) { }

  addDevice(device): Observable<any> {
    return this.http.post<any>(this.url + "add/", device);
  }

  
  viewDevice(): Observable<any> {
    return this.http.get<any>(this.url + "view/");
  }

  updateDevice(device): Observable<any> {
    return this.http.put<any>(this.url + "update/", device);
  }

  
  deleteDevice(deviceId: String): Observable<any> {
    return this.http.delete<any>(this.url + "delete/?deviceId=" + deviceId);
  }
}
