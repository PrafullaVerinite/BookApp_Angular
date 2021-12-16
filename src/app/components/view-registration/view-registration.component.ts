import { Component, OnInit } from '@angular/core';
import { Registration } from 'src/app/entity/registration';
import { RegistrationService } from 'src/app/service/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {

  constructor(private service : RegistrationService,private router:Router) { }
   
  register : Registration = new Registration();
  registrationList:any
  ngOnInit(): void {
    // alert("hi");
    this.service.getRegisterUser().subscribe((data)=>this.registrationList=data);
    // alert(this.registrationList);
  }

  deleteUser(registerId:number){
    this.service.deleteUser(registerId).subscribe();
    this.reloadCurrentRoute();
  }
  
  reloadCurrentRoute() {
    throw new Error('Method not implemented.');
  }

  updateUser(registerId:number){
    // alert("save")
    this.router.navigate(['update-registration',registerId]);
  }

  showUserDetails(registerId:number){
    // alert(registerId);
    this.router.navigate(['show-registration',registerId]);
  }


}
