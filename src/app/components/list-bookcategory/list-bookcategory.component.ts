import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookCategory } from 'src/app/entity/book-category';
import { BookCategoryService } from 'src/app/service/book-category.service';

@Component({
  selector: 'app-list-bookcategory',
  templateUrl: './list-bookcategory.component.html',
  styleUrls: ['./list-bookcategory.component.css']
})
export class ListBookcategoryComponent implements OnInit {

  book!: BookCategory[];
  categoryId: any;
  bookId!: any;
  
  ngOnInit(): void{
    this.getbook();
  }

  constructor(public bookservice: BookCategoryService,private router:Router) { }

  
  public getbook(){
    this.bookservice.getall().subscribe(data => {
      this.book = data;
    })
    
  }
  refreshList() {
    this.getbook();
    this.categoryId= null;
    this.bookId = null;
  }

  setActive(categoryId: any, bookId: any) {
    this.categoryId = categoryId;
    this.bookId = bookId;
  }
  updatebook(id: number){
    // alert(id)
    this.router.navigate(['update',id]);
  }
  getview(id: number){
    this.router.navigate(['getby',id]);
  }

  addBookCategory(){
    this.router.navigate(['addbookcategory']);
  }

}
