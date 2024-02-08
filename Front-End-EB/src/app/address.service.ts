import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  /*getAddress() {
    throw new Error('Method not implemented.');
  }*/

  constructor(private http : HttpClient) {}
    private url: string = 'http://localhost:1234';

  postAddress(data : any):Observable<any>{
   
    return this.http.post<any>("http://localhost:1234/performAddressInsert", data);
  }

  getAddress():Observable<any>{
   
    return  this.http.get<any>("http://localhost:1234/ViewAllAddresss");
  }
  putAddress(data : any, id : number):Observable<any>{
    
    return   this.http.put<any>("http://localhost:1234/performAddressUpdate", data );
  }
  

  deleteAddress(data : any):Observable<any>{
    return this.http.delete(this.url+"/performAddressDelete/{id}"+data.id);
  
   }

}
