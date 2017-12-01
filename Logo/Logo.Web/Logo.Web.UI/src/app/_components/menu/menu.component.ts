import { Component, OnInit, Output, Input, EventEmitter, } from '@angular/core';
import { FolderNameWithParentFolderId } from '../home/folderNameWithParentFolderId';
import { HomeService } from '../home/home.service';
import { SearchModel } from './searchModel';
import { SortType } from './sortType';
import { UserInfoWithToken, UserInfo } from '../login/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  currentUser: UserInfo;
  @Output() toggleGridEvent = new EventEmitter<boolean>();
  @Output() refreshEvent = new EventEmitter<any>();
  @Output() toggleSearchEvent = new EventEmitter<SearchModel>();
  @Output() sortEvent = new EventEmitter<SortType>();
  grid = true;
  @Input() folderId: string;
  breadcrumbs: FolderNameWithParentFolderId[] = [];
  fileSearch: boolean = true;
  SortType: typeof SortType = SortType;
  sortValue: SortType;

  constructor(private homeService: HomeService,
  ) {
    let userInfoWithToken: UserInfoWithToken = JSON.parse(localStorage.getItem('currentUser'));
    this.currentUser = userInfoWithToken.userInfo;
  }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('grid')) === null) {
      this.grid = true;
    }
    else {
      this.grid = JSON.parse(localStorage.getItem('grid'));
    }

    if (!(this.folderId === undefined)) {
      this.loadBreadcrumbs();
    }
  }

  ngOnChanges() {
    this.loadBreadcrumbs();
  }

  private loadBreadcrumbs() {
    this.homeService.loadBreadcrumbs(this.folderId).subscribe(
      data => {
        this.breadcrumbs = (data as FolderNameWithParentFolderId[]).reverse();
        if (!data.success && data.message) {
          console.log(data.message)
        }
        else {
          console.log(this.breadcrumbs)
          console.log('Loading bc successfull');
        }
      },
      error => {
        //show info about error
        console.log('Loading bc unsuccessfull');
      });
  }


  toggleGrid(): void {
    this.grid = true;
    this.toggleGridEvent.emit(true);
    localStorage.setItem('grid', JSON.stringify(this.grid))
  }

  toggleList(): void {
    this.grid = false;
    this.toggleGridEvent.emit(false);
    localStorage.setItem('grid', JSON.stringify(this.grid))
  }

  toggleFileSearch(): void {
    this.fileSearch = true;
  }

  toggleTagSearch(): void {
    this.fileSearch = false;
  }

  search(searchInput: string): void {
    let searchModel: SearchModel = {
      text: searchInput,
      fileTypeSearch: this.fileSearch
    }

    this.toggleSearchEvent.emit(searchModel);
  }

  refresh(): void {
    this.refreshEvent.emit();
  }

  setType(value: string) {
    this.sortValue = SortType[value];
    this.sortEvent.emit(SortType[value]);
  }
}
