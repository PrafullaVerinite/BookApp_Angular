import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Insert } from 'src/app/entity/author';
import { AuthorService } from 'src/app/service/author.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {

  route: any;
  @Input()
  FirstName!: String;
  LastName!: String;
  dataAccess: any;

  constructor(private authorService: AuthorService, private router: Router) { }

  Insert: Insert = new Insert();
  ngOnInit() {
  }
  insertAuthor() {
    let Insert: Insert = {
      firstName: this.FirstName,
      lastName: this.LastName,
    };
    this.authorService.saveAuthor(this.Insert)
      .subscribe(
        success => alert("Sussessfully Inserted"),
        error => alert("unsuccess")
      );
    this.router.navigate(['home']);

  }

}
