import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private _httpService: Http) { }

  title: string = "Logo";
  apiValues: string[] = [];

  ngOnInit() {
    // this._httpService.get('/api/files').subscribe(values => {
    //   this.apiValues = values.json() as string[];
    // });
  }
}