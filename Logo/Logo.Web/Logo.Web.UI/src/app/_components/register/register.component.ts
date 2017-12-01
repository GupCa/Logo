import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

import { AuthentificationService } from '../login/authentification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  model: any = {};
  loading = false;
  returnUrl: string;
  public options = {
    position: ["bottom", "right"],
    timeOut: 3000,
    showProgressBar: true,
    pauseOnHover: true,
    clickToClose: true,
    clickIconToClose: true,
    lastOnBottom: true,
    maxLength: 500
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authentificationService: AuthentificationService,
    private notificationsService: NotificationsService,
  ) { }


  register() {

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.loading = true;
    this.authentificationService.addUser(this.model.name, this.model.email, this.model.password)
      .subscribe(
      data => {
        // set success message and pass true paramater to persist the message after redirecting to the login page
        //this.alertService.success('Registration successful', true);
        if (!data.success && data.message) {
          this.notificationsService.error('Упс!', data.message, this.options);
          this.loading = false;
        }
        else {
          console.log('AddingUser succesfull');
          this.authentificationService.login(this.model.email, this.model.password)
            .subscribe(
            data => {
              console.log('Login succesfull');
              this.router.navigate([this.returnUrl]);
            },
            error => {
              console.log('Login unsuccesfull');
              this.loading = false;
            });
        }
      },
      error => {
        console.log('AddingUser unsuccesfull');
        this.loading = false;
        this.notificationsService.error('Упс!', 'Неполадки с сервером.', this.options);
      });
  }
}