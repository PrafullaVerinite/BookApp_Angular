import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/entity/book';
import { HttpclientService } from 'src/app/service/httpclient.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  // registerForm: FormGroup = new FormGroup;
  // submitted = false;
  private selectedFile: any;
  imgURL: any;

  @Input()
  book: Book = new Book;

  @Output()
  bookAddedEvent = new EventEmitter();

  constructor(private httpClientService: HttpclientService,
    private router: Router, private httpClient: HttpClient
  ) { }

  ngOnInit() {
    //   this.registerForm = this.fb.group({
    //     bookTitle: ['', Validators.required]
    //   },

    // ); 
  }

  public onFileChanged(event: any) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };

  }



  addBook() {
    const uploadData = new FormData();
    uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.selectedFile.imageName = this.selectedFile.name;

    this.httpClient.post('http://localhost:8080/book/upload', uploadData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.httpClientService.addBook(this.book).subscribe(
            (book) => {
              // this.router.navigate(['admin', 'books']);
              this.bookAddedEvent.emit();
              this.router.navigate(['books']);

            }
          );
          alert("Image uploaded successfully");
          console.log('Image uploaded successfully');
        } else {
          console.log('Image not uploaded successfully');
        }
      }
      );
  }

  // get registerFormControl() {
  //   return this.registerForm.controls;
  // }

  // onSubmit() {
  //   this.submitted = true;
  //   if (this.registerForm.valid) {
  //     alert('Form Submitted succesfully!!!\n Check the values in browser console.');
  //     console.table(this.registerForm.value);
  //   }
  // }

}