import { Component, OnInit } from '@angular/core';
import { Registration } from 'src/app/entity/registration';
import { RegistrationService } from 'src/app/service/registration.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-registration',
  templateUrl: './update-registration.component.html',
  styleUrls: ['./update-registration.component.css']
})
export class UpdateRegistrationComponent implements OnInit {

  constructor(private service: RegistrationService, private router: Router, private route: ActivatedRoute) { }
  registrationId!: number;
  registeruser: Registration = new Registration();

  ngOnInit() {
    this.registrationId = this.route.snapshot.params['registerId']
    this.registeruser.registerId = this.registrationId;
    this.service.getUserById(this.registrationId).subscribe((data) => this.registeruser = data);
  }

  update() {
    // alert(this.registeruser.registerId);
    this.service.updateUser(this.registeruser)
      .subscribe((data) => this.registeruser = data);
    this.router.navigateByUrl('/view-registration')
  }
}
