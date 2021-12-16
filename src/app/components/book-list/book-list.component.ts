import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/entity/book';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpclientService } from 'src/app/service/httpclient.service';
// import { NgxPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  @Output()
  bookDeletedEvent = new EventEmitter();
  // deleteId: any;

  books: Array<Book> = [];
  booksRecieved: Array<Book> = [];
  selectedBook: any;
  action: string | undefined;
  response: any;
  book: Book = new Book;
  constructor(private httpClientService: HttpclientService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.refreshData();
  }

  refreshData() {
    this.httpClientService.getBooks().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
    this.activatedRoute.queryParams.subscribe(
      (params) => {
        // this.action = params['action'];
        const bookId = params['bookId'];
        if (bookId) {
          this.selectedBook = this.books.find(book => book.bookId === +bookId);
        }
      }
    );
  }
  // this.activedRoute.queryParams.subscribe(
  //         (params) => {
  //           // get the url parameter named action. this can either be add or view.
  //           this.action = params['action'];
  //     // get the parameter id. this will be the id of the book whose details 
  //     // are to be displayed when action is view.
  //     const bookId = params['bookId'];
  //     // if id exists, convert it to integer and then retrive the book from
  //     // the books array
  //           if (bookId) {
  //             this.selectedBook = this.books.find(book => {
  //               return book.bookId === +bookId;
  //             });
  //           }
  //         }
  //       );


  // handleSuccessfulResponse(response: Book[]) {
  //   this.books = response;
  // }

  handleSuccessfulResponse(response: Book[]) {
    this.books = new Array<Book>();
    //get books returned by the api call
    this.booksRecieved = response;
    for (const book of this.booksRecieved) {

      const bookwithRetrievedImageField = new Book();
      bookwithRetrievedImageField.bookId = book.bookId;
      bookwithRetrievedImageField.bookTitle = book.bookTitle;
      //populate retrieved image field so that book image can be displayed
      bookwithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + book.picByte;
      bookwithRetrievedImageField.description = book.description;
      bookwithRetrievedImageField.bookPrice = book.bookPrice;
      bookwithRetrievedImageField.picByte = book.picByte;
      this.books.push(bookwithRetrievedImageField);
    }
  }

  // viewUser(id: number) {
  //   this.router.navigate(['admin', 'users'], { queryParams: { id, action: 'view' } });
  // }

  addBook() {
    this.selectedBook = new Book();
    this.router.navigate(['addBooks'], { queryParams: { action: 'add' } });
  }

  viewBook(bookId: number) {
    this.router.navigate(['viewBooks', bookId]);
  }

  // reloadComponent() {
  //   let currentUrl = this.router.url;
  //   this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  //   this.router.onSameUrlNavigation = 'reload';
  //   this.router.navigate([currentUrl]);
  // }

  deleteBook(bookId: number) {
    alert("want's to delete the record");
    this.httpClientService.deleteBook(bookId).subscribe(
        (book) => {
          this.bookDeletedEvent.emit();
          this.router.navigate(['books']);
        }
      );
    //   data => {
    //     this.deleteId = data;
    //   }, error =>
    //   this.reloadComponent()
    // )
  }

  updateBook(bookId: number) {
    this.router.navigate(['updateBook', bookId]);
  }
}

