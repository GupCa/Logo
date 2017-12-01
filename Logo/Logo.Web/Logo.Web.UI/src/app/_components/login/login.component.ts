import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

import { AuthentificationService } from './authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authentificationService: AuthentificationService,
    private notificationsService: NotificationsService,
  ) { }

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

  ngOnInit() {
    // reset login status
    this.authentificationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.authentificationService.login(this.model.email, this.model.password)
      .subscribe(
      data => {
        if (!data.success && data.message) {
          this.notificationsService.error('Упс!', data.message, this.options);
          this.loading = false;
        }
        else {
          console.log('Login succesfull');
          this.router.navigate([this.returnUrl]);
        }
      },
      error => {
        console.log('Login unsuccesfull');
        this.loading = false;
        this.notificationsService.error('Упс!', 'Неполадки с сервером.', this.options);
      });
  }
}