import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Insert } from 'src/app/entity/author';
import { AuthorService } from 'src/app/service/author.service';

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent implements OnInit {

  id!: number;
  updateData:Insert=new Insert();
  constructor(private apiCall:AuthorService,private route:ActivatedRoute,private router:Router){}
  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.apiCall.getById(this.id).subscribe(
     data=> {
        this.updateData=data;
      });

  }
  // updateAuthor()
  // {
  //   this.apiCall.updateAuthor(this.id,this.updateData).subscribe(
  //    updata=> {
  //       this.updateData=updata;
  //       this.router.navigateByUrl('/home')

  //     });
  // }
  updateAuthor()
  {
  this.apiCall.updateAuthor(this.id,this.updateData)
      .subscribe((updata) => this.updateData = updata);
    this.router.navigateByUrl('home')
  }
}
