import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})export class BillService {

  constructor(private http: HttpClient) { }
  private url: string = 'http://localhost:1234';

  postBill(data: any): Observable<any> {

    return this.http.post<any>("http://localhost:1234/performBillInsert", data);
  }

  getBill(): Observable<any> {

    return this.http.get<any>("http://localhost:1234/ViewAllBills");
  }
  putBill(data: any, id: number): Observable<any> {

    return this.http.put<any>("http://localhost:1234/performBillUpdate", data);
  }


  deleteBill(data: any): Observable<any> {
    return this.http.delete(this.url + "/performBillDelete/" + data.id);

  }
}

