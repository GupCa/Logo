import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, ResponseContentType } from '@angular/http';
import { Folder } from './folder';
import { TagsInfo } from './tagsInfo';
import { SearchModel } from './searchModel';
import { FolderNameWithParentFolderId } from './folderNameWithParentFolderId';
import { FileNameWithFolderIdWithDate } from './fileNameWithFolderIdWithDate';
import { UpdatedObject } from './updatedObject';
import { Observable } from "rxjs/Rx"

@Injectable()
export class HomeService {

  constructor(private http: Http) { }

  search(textToSearh: string, typeFileSearch: boolean) {
    
    let searchModel: SearchModel = {
      name: textToSearh,
    };
    if (typeFileSearch) {
      return this.http.post('/api/folders/search-name', searchModel, this.jwt()).map(this.extractData);
    }
    else {
      return this.http.post('/api/folders/search-tag', searchModel, this.jwt()).map(this.extractData);
    }
  }

  //menu
  createfolder(folderName: string, parentFolderId: string) {
    let folderNameWithParentFolderId: FolderNameWithParentFolderId = {
      name: folderName,
      parentObjectId: parentFolderId,
    };
    return this.http.post('/api/folders/add-folder', folderNameWithParentFolderId, this.jwt()).map(this.extractData);
  }

  uploadFile(input: FormData) {
    return this.http.post('/api/files/upload-request', input, this.jwt()).map(this.extractData);
  }

  //folders
  renameFolder(folderName: string, FolderId: string) {
    let updatedObject: UpdatedObject = {
      objectId: FolderId,
      updatedName: folderName,
    };

    return this.http.post('/api/folders/rename-folder', updatedObject, this.jwt()).map(this.extractData);
  }

  addTags(folderId: string, tags: string) {
    let tagsInfo: TagsInfo = {
      text: tags,
      objectId: folderId,
    };

    return this.http.post('/api/folders/add-folder-tag', tagsInfo, this.jwt()).map(this.extractData);
  }

  deleteFolder(selectedId: string) {
    return this.http.get('/api/folders/delete-folder/' + selectedId, this.jwt()).map(this.extractData);
  }

  //files
  renameFile(fileName: string, FolderId: string) {
    let updatedObject: UpdatedObject = {
      objectId: FolderId,
      updatedName: fileName,
    };

    return this.http.post('/api/folders/rename-file', updatedObject, this.jwt()).map(this.extractData);
  }

  deleteFile(selectedId: string) {
    return this.http.get('/api/folders/delete-file/' + selectedId, this.jwt()).map(this.extractData);
  }

  addTagsFile(fileId: string, tags: string) {
    let tagsInfo: TagsInfo = {
      text: tags,
      objectId: fileId,
    };

    return this.http.post('/api/folders/add-file-tag', tagsInfo, this.jwt()).map(this.extractData);
  }

  downloadFile(fileId: string) {
    return this.http.get('/api/files/download-file/' + fileId, this.jwtWithResponceContentType()).map(res => {
      return new Blob([res.blob()], {
        type: res.headers.get("Content-Extention")
      })
    });
  }

  downloadZIP(folderId: string) {
    return this.http.get('/api/files/archive-request/' + folderId, this.jwtWithResponceContentType()).map(res => {
      return new Blob([res.blob()], {
        type: res.headers.get("Content-Extention")
      })
    });
  }

  //initial requests
  loadRootFolders() {
    return this.http.get('api/folders/get-root-folders/', this.jwt()).map(this.extractData);
  }

  loadRootFiles() {
    return this.http.get('api/folders/get-root-files/', this.jwt()).map(this.extractData);
  }

  loadFolders(id: string) {
    return this.http.get('api/folders/get-folders/' + id, this.jwt()).map(this.extractData);
  }

  loadFiles(id: string) {
    return this.http.get('api/folders/get-files/' + id, this.jwt()).map(this.extractData);
  }

  loadBreadcrumbs(id: string) {
    return this.http.get('api/folders/get-path-to-root/' + id, this.jwt()).map(this.extractData);
  }

  private extractData(res: Response) {
    return res.text() ? res.json() : {};;
  }

  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      headers.append('Accept', 'application/json');
      return new RequestOptions({ headers: headers });
    }
  }

  private jwtWithResponceContentType() {

    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      return new RequestOptions({
        responseType: ResponseContentType.Blob,
        headers: headers
      });
    }
  }
}
