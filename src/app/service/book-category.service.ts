import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookCategory } from '../entity/book-category';
@Injectable({
  providedIn: 'root'
})
export class BookCategoryService {
  private baseURL ="http://localhost:8080/"
  getbookall: any;
  constructor(private httpclient: HttpClient) { }

  getall():Observable<any> {
    return this.httpclient.get(this.baseURL+'/bookcategory');
  }
  create(bookcat:BookCategory): Observable<object>{
   return this.httpclient.post(this.baseURL+'/bookcategory/',bookcat);
  }
  update(id: number,bookcat:BookCategory): Observable<any> {
    // alert(id);
    // alert(bookcat.categoryId);
    return this.httpclient.put(this.baseURL +'/bookcategory/'+bookcat.id, bookcat);
  }
  getcategory(id: number): Observable<any>{
    return this.httpclient.get('http://localhost:8080/bookcategory/'+id)
  }
}
