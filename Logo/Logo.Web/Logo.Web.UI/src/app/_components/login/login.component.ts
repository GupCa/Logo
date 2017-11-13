import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService} from '../../_services/index';
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
    private alertService: AlertService) { }

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
        console.log('Login succesfull');
        this.router.navigate([this.returnUrl]);
      },
      error => {
        console.log('Login unsuccesfull');
        this.alertService.error(error);
        this.loading = false;
      });
  }
}