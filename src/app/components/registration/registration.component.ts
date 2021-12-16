import { Component, Input, OnInit } from '@angular/core';
import { Registration } from 'src/app/entity/registration';
import { RegistrationService } from 'src/app/service/registration.service';
import { ViewRegistrationComponent } from '../view-registration/view-registration.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  @Input()
  registration: Registration | undefined
  constructor(private service: RegistrationService, private router: Router) { }
  viewregister = ViewRegistrationComponent;
  registrations: Registration = new Registration();
  ngOnInit() {
  }

  register() {

    this.service.registeruser(this.registrations).subscribe((registrations: any) => {
      this.router.navigateByUrl('/view-registration')
    });
  }
}
