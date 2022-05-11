import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomDataVisualService {

  private chartClickNotification = new Subject<any>();

  constructor() {
  }

  public transmitNotification(data: any): void {
    this.chartClickNotification.next(data);
  }

  public listenVisualNotification(): Observable<any> {
    return this.chartClickNotification.asObservable();
  }
}
