import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class OrderBookService {
  constructor(private _httpClient:HttpClient){}
  getOrderBook():Observable<any>{
      return this._httpClient.get("http://localhost:8080/Order-Book");
  }
  // savePostEntity(savedata:PostEntity):Observable<any>{
  //     return this._httpClient.post("http://localhost:9990/Order-Book",savedata);
  // }
  getOrderById(id:number):Observable<any>{
    return this._httpClient.get("http://localhost:8080/Order-Book/"+id);
  }
  // updateRecord(id:number,data:OrderBook):Observable<any>{
  //   return this._httpClient.put("http://localhost:9990/Order-Book/"+id,data);
  // }
  searchByBook(bookName:String):Observable<any>{
    return this._httpClient.get("http://localhost:8080/Order-Book/bookName/"+bookName);
  }
}
