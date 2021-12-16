import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Insert } from '../entity/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  constructor(private httpclient: HttpClient) { }
  getAuthorList(): Observable<any> {
    return this.httpclient.get("http://localhost:8080/author/authorList");
  }
  getById(id: number): Observable<any> {
    return this.httpclient.get("http://localhost:8080/author/getAuthor/" + id);
  }
  deleteAuthorById(id: number): Observable<any> {
    return this.httpclient.delete("http://localhost:8080/author/deleteAuthor/" + id);
  }
  updateAuthor(authorId: number, data: Insert): Observable<any> {
    return this.httpclient.put("http://localhost:8080/author/updateAuthor/" + authorId, data);
  }
  saveAuthor(insert: Insert) {
    return this.httpclient.post("http://localhost:8080/author/saveAuthors", insert);
  }
}
