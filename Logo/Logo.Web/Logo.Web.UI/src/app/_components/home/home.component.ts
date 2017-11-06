import { Component, OnInit } from '@angular/core';

import { UserInfoWithToken } from '../../_models/index';
import { UserService } from '../../_services/index';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
   currentUser: UserInfoWithToken;
   model: any = {};

   constructor(private userService: UserService) {
       this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }

   ngOnInit() {
   }

   createfolder(){
        this.model.foldername = '5';
   }
}