import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http : HttpClient) { }
  private url: string = 'http://localhost:1234';

  postAccount(data : any):Observable<any>{
   
    return this.http.post<any>("http://localhost:1234/performAccountInsert", data);
  }

  getAccount():Observable<any>{
   
    return  this.http.get<any>("http://localhost:1234/ViewAllAccountss");
  }
  putAccount(data : any, id : number):Observable<any>{
    
    return   this.http.put<any>("http://localhost:1234/performAccountUpdate", data );
  }
  

  deleteAccount(data : any):Observable<any>{
    return this.http.delete(this.url+"/performAccountDelete/"+data.id);
  9
   }

}
