import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Book } from '../entity/book';
import { Registration } from '../entity/registration';

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {
  baseUrl: string;
  getBooksList() {
    throw new Error('Method not implemented.');
  }
  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  getBooks() {
    // return this.httpClient.get<Book[]>('http://localhost:8080/book/getAllBooks');
    return this.httpClient.get<Book[]>(`${this.baseUrl}/book/getAllBooks`);
  }

  addBook(newBook: Book) {
    return this.httpClient.post<Book>('http://localhost:8080/book/saveBooks', newBook);
  }

  getBookById(bookId: number): Observable<any> {
    return this.httpClient.get('http://localhost:8080/book/viewBook/' + bookId);

  }

  deleteBook(bookId: number): Observable<any>  {
    return this.httpClient.delete('http://localhost:8080/book/deleteBook/' + bookId);
  }
}