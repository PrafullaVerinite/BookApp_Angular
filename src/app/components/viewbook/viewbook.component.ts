import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/entity/book';
import { HttpclientService } from 'src/app/service/httpclient.service';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {


  @Input()
  book: Book = new Book;

  constructor(private service: HttpclientService, private route: ActivatedRoute) { }

  bookIds!: number;
  bookNew: Book = new Book();

  ngOnInit() {
    this.bookIds = this.route.snapshot.params['bookId']
    this.bookNew.bookId = this.bookIds;
    
    this.service.getBookById(this.bookNew.bookId).subscribe(
      (data) =>
        this.bookNew = data
        );
  }

}
