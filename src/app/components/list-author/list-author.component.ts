import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from 'src/app/entity/author';
import { AuthorService } from 'src/app/service/author.service';

@Component({
  selector: 'app-list-author',
  templateUrl: './list-author.component.html',
  styleUrls: ['./list-author.component.css']
})
export class ListAuthorComponent implements OnInit {

  constructor(private authorService: AuthorService, private router: Router) {

  }

  listOfAuthors!: Author[];
  deleteId: any;
  selectedAuthor: any;

  ngOnInit() {
    this.authorService.getAuthorList()
      .subscribe((data: any[]) => {
        this.listOfAuthors = data;
      })
  }


  //method to relaod a currentg Component
  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

  delete(id: number) {
    alert("want's to delete this record");
    this.authorService.deleteAuthorById(id)
      .subscribe(
        data => {
          this.deleteId = data;

        }, error =>
        this.reloadComponent()
      )
  }


  // delete(id:number){
  //   this.authorService.deleteAuthorById(id).subscribe();
  //   this.reloadCurrentRoute();
  // }

  update(id: number) {
    this.router.navigate(['updateAuthor', id])
  }

  // search() {
  //   console.log(this.name.authorId);
  //   this.authorService.getById(this.name.authorId).subscribe(
  //     (response) => {
  //       this.listOfAuthors = response;
  //       console.log(response);
  //     }
  //   );

  // }

  addAuthor() {
    this.selectedAuthor = new Author();
    this.router.navigate(['addAuthor']);
  }


}