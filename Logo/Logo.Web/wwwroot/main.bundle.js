webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_components/data/data.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu [folderId]=\"folderId\" (toggleGridEvent)=\"toggleGrid($event)\" (toggleSearchEvent)=\"search($event)\" (refreshEvent)=\"this.ngOnInit($event)\"\r\n  (sortEvent)=\"sort($event)\"></app-menu>\r\n<div class=\"placefornav\">\r\n\r\n</div>\r\n\r\n\r\n<div class=\"col-sm-10 container-for-ff\">\r\n  <div *ngIf=\"grid\">\r\n    <div *ngIf=\"folders?.length > 0\">\r\n      <div class=\"title-f\">Папки</div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-3\" *ngFor=\"let folder of folders\">\r\n          <button class=\"folder-grid\" [contextMenu]=\"static\" (dblclick)=\"moveToSelectedFolder(folder.folderId, folder.name)\" e>\r\n            <div class=\"folder-grid-item\">\r\n              <div class=\"for-inline\">\r\n                <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                  viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\" class=\"img-folder\">\r\n                  <g>\r\n                    <path class=\"st0\" d=\"M119.5,200.5c-2.2,0-4.1,1.5-4.7,3.6L17.1,448v8.5c0,6.3-0.4,8.5,4.8,8.5h381.9c9.9,0,18.6-6.6,20.9-15.5\r\n                     L512,209.1c0,0,0-5.3,0-8.5H119.5z\" />\r\n                    <path class=\"st0\" d=\"M108.6,183.5h343.6h8.5V130c0-12.9-10.5-23.3-23.3-23.3H226.3l-42.7-59.7H23.3C10.5,46.9,0,57.4,0,70.2v356.7\r\n                     l87.7-228C90.1,190.1,98.8,183.5,108.6,183.5z\" />\r\n                  </g>\r\n                </svg>\r\n              </div>\r\n              <div class=\"for-inline\">{{folder.name}}</div>\r\n            </div>\r\n\r\n            <button id=\"openRenameFolderModalButton\" hidden=\"true\" data-toggle=\"modal\" data-target=\"#renameFolderModal\">Переименовать</button>\r\n            <button id=\"openAddTagFolderModalButton\" hidden=\"true\" data-toggle=\"modal\" data-target=\"#addTagFolderModal\">Добавить тег</button>\r\n            <button id=\"openDeleteFolderModalButton\" hidden=\"true\" data-toggle=\"modal\" data-target=\"#deleteFolderModal\">Удалить папку</button>\r\n            <context-menu #static>\r\n              <ng-template contextMenuItem (execute)=\"openRenameFolderModal(folder.folderId)\">\r\n                Переименовать\r\n              </ng-template>\r\n              <ng-template contextMenuItem (execute)=\"openAddTagFolderModal(folder.folderId)\">\r\n                Добавить тег\r\n              </ng-template>\r\n              <ng-template contextMenuItem (execute)=\"callDownloadZIP(folder.folderId)\">\r\n                Скачать ZIP-архив\r\n              </ng-template>\r\n              <ng-template contextMenuItem (execute)=\"openDeleteFolderModal(folder.folderId)\">\r\n                Удалить папку\r\n              </ng-template>\r\n            </context-menu>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div *ngIf=\"files?.length > 0\">\r\n      <div class=\"title-f\">Файлы</div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-3\" *ngFor=\"let file of files\">\r\n          <button class=\"thumbnail\" class=\"folder-grid\" [contextMenu]=\"static\" style=\"padding: 0\">\r\n            <div (click)=\"openImage(file.fileId)\">\r\n              <img *ngIf=\"file.resizedImage\" [src]=\"sanitize(file.resizedImage)\" />\r\n              <div class=\"folder-grid-item\">\r\n                <div class=\"for-inline\">\r\n                  <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                    viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\" class=\"img-folder\">\r\n                    <path class=\"st0\" d=\"M503.2,53H8.8C4,53,0,56.9,0,61.8v388.4c0,4.9,4,8.8,8.8,8.8h494.3c4.9,0,8.8-3.9,8.8-8.8V61.8\r\n                         C512,56.9,508,53,503.2,53z M141.2,150.1c27.1,0,49.2,22.1,49.2,49.2c0,27.1-22.1,49.2-49.2,49.2s-49.2-22.1-49.2-49.2\r\n                         C92.1,172.1,114.1,150.1,141.2,150.1z M465.5,314.9c-3.3,3.6-8.9,3.8-12.5,0.5l-99.4-91.1l-81,88.8l42.4,42.4c3.5,3.5,3.5,9,0,12.5\r\n                         c-3.5,3.5-9,3.5-12.5,0l-90.9-90.9l-144,126.8c-1.7,1.5-3.8,2.2-5.8,2.2c-2.4,0-4.9-1-6.6-3c-3.2-3.7-2.9-9.2,0.8-12.5l150.2-132.3\r\n                         c3.5-3.1,8.8-2.9,12.1,0.4l41.9,41.9l86.5-94.7c1.6-1.7,3.8-2.8,6.1-2.9c2.3-0.1,4.6,0.7,6.4,2.3L465,302.5\r\n                         C468.6,305.8,468.8,311.3,465.5,314.9z\" />\r\n                  </svg>\r\n                </div>\r\n                <div class=\"for-inline\">{{file.name}}</div>\r\n              </div>\r\n            </div>\r\n            <button id=\"openRenameFileModalButton\" hidden=\"true\" data-toggle=\"modal\" data-target=\"#renameFileModal\">Переименовать</button>\r\n            <button id=\"openAddTagFileModalButton\" hidden=\"true\" data-toggle=\"modal\" data-target=\"#addTagFileModal\">Добавить тег</button>\r\n            <button id=\"openDeleteFileModalButton\" hidden=\"true\" data-toggle=\"modal\" data-target=\"#deleteFileModal\">Удалить файл</button>\r\n            <context-menu #static>\r\n              <ng-template contextMenuItem (execute)=\"openRenameFileModal(file.fileId)\">\r\n                Переименовать\r\n              </ng-template>\r\n              <ng-template contextMenuItem (execute)=\"openAddTagFileModal(file.fileId)\">\r\n                Добавить тег\r\n              </ng-template>\r\n              <ng-template contextMenuItem (execute)=\"callDownload(file.fileId)\">\r\n                Скачать файл\r\n              </ng-template>\r\n              <ng-template contextMenuItem (execute)=\"openDeleteFileModal(file.fileId)\">\r\n                Удалить файл\r\n              </ng-template>\r\n            </context-menu>\r\n\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div *ngIf=\"!grid\">\r\n    <div *ngIf=\"folders?.length > 0 || files?.length > 0\">\r\n      <div class=\"col-sm-9 just-for-padding\">\r\n        <div class=\"title-f\">Название</div>\r\n      </div>\r\n      <div class=\"col-sm-3\">\r\n        <div class=\"title-f\">Теги</div>\r\n      </div>\r\n      <button class=\"folder-grid col-sm-12 \" *ngFor=\"let folder of folders\">\r\n        <div [contextMenu]=\"static\" (dblclick)=\"moveToSelectedFolder(folder.folderId, folder.name)\">\r\n          <div class=\"col-sm-9 just-for-padding\">\r\n            <div class=\"folder-grid-item\">\r\n              <div class=\"for-inline\">\r\n                <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                  viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\" class=\"img-folder\">\r\n                  <g>\r\n                    <path class=\"st0\" d=\"M119.5,200.5c-2.2,0-4.1,1.5-4.7,3.6L17.1,448v8.5c0,6.3-0.4,8.5,4.8,8.5h381.9c9.9,0,18.6-6.6,20.9-15.5\r\n                         L512,209.1c0,0,0-5.3,0-8.5H119.5z\" />\r\n                    <path class=\"st0\" d=\"M108.6,183.5h343.6h8.5V130c0-12.9-10.5-23.3-23.3-23.3H226.3l-42.7-59.7H23.3C10.5,46.9,0,57.4,0,70.2v356.7\r\n                         l87.7-228C90.1,190.1,98.8,183.5,108.6,183.5z\" />\r\n                  </g>\r\n                </svg>\r\n              </div>\r\n              <div class=\"for-inline\">{{folder.name}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-3\">\r\n            <div class=\"folder-grid-item\">\r\n              <span *ngFor=\"let tagFolder of folder.tagList\">\r\n                #{{tagFolder}}\r\n              </span>\r\n            </div>\r\n          </div>\r\n          <button id=\"openRenameFolderModalButton\" hidden=\"true\" data-toggle=\"modal\" data-target=\"#renameFolderModal\">Переименовать</button>\r\n          <button id=\"openAddTagFolderModalButton\" hidden=\"true\" data-toggle=\"modal\" data-target=\"#addTagFolderModal\">Добавить тег</button>\r\n          <button id=\"openDeleteFolderModalButton\" hidden=\"true\" data-toggle=\"modal\" data-target=\"#deleteFolderModal\">Удалить папку</button>\r\n          <context-menu #static>\r\n            <ng-template contextMenuItem (execute)=\"openRenameFolderModal(folder.folderId)\">\r\n              Переименовать\r\n            </ng-template>\r\n            <ng-template contextMenuItem (execute)=\"openAddTagFolderModal(folder.folderId)\">\r\n              Добавить тег\r\n            </ng-template>\r\n            <ng-template contextMenuItem (execute)=\"callDownloadZIP(folder.folderId)\">\r\n              Скачать ZIP-архив\r\n            </ng-template>\r\n            <ng-template contextMenuItem (execute)=\"openDeleteFolderModal(folder.folderId)\">\r\n              Удалить папку\r\n            </ng-template>\r\n          </context-menu>\r\n        </div>\r\n      </button>\r\n    </div>\r\n\r\n\r\n\r\n    <button class=\"folder-grid col-sm-12 \" *ngFor=\"let file of files\">\r\n      <div [contextMenu]=\"static\">\r\n        <div (click)=\"openImage(file.fileId)\">\r\n          <div class=\"col-sm-9 just-for-padding\">\r\n            <div class=\"folder-grid-item\">\r\n              <div class=\"for-inline\">\r\n                <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                  viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\" class=\"img-folder\">\r\n                  <path class=\"st0\" d=\"M503.2,53H8.8C4,53,0,56.9,0,61.8v388.4c0,4.9,4,8.8,8.8,8.8h494.3c4.9,0,8.8-3.9,8.8-8.8V61.8\r\n                         C512,56.9,508,53,503.2,53z M141.2,150.1c27.1,0,49.2,22.1,49.2,49.2c0,27.1-22.1,49.2-49.2,49.2s-49.2-22.1-49.2-49.2\r\n                         C92.1,172.1,114.1,150.1,141.2,150.1z M465.5,314.9c-3.3,3.6-8.9,3.8-12.5,0.5l-99.4-91.1l-81,88.8l42.4,42.4c3.5,3.5,3.5,9,0,12.5\r\n                         c-3.5,3.5-9,3.5-12.5,0l-90.9-90.9l-144,126.8c-1.7,1.5-3.8,2.2-5.8,2.2c-2.4,0-4.9-1-6.6-3c-3.2-3.7-2.9-9.2,0.8-12.5l150.2-132.3\r\n                         c3.5-3.1,8.8-2.9,12.1,0.4l41.9,41.9l86.5-94.7c1.6-1.7,3.8-2.8,6.1-2.9c2.3-0.1,4.6,0.7,6.4,2.3L465,302.5\r\n                         C468.6,305.8,468.8,311.3,465.5,314.9z\" />\r\n                </svg>\r\n              </div>\r\n              <div class=\"for-inline\">{{file.name}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-3\">\r\n            <div class=\"folder-grid-item\">\r\n              <span *ngFor=\"let tagFile of file.tagList\">\r\n                #{{tagFile}}\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <button id=\"openRenameFileModalButton\" hidden=\"true\" data-toggle=\"modal\" data-target=\"#renameFileModal\">Переименовать</button>\r\n        <button id=\"openAddTagFileModalButton\" hidden=\"true\" data-toggle=\"modal\" data-target=\"#addTagFileModal\">Добавить тег</button>\r\n        <button id=\"openDeleteFileModalButton\" hidden=\"true\" data-toggle=\"modal\" data-target=\"#deleteFileModal\">Удалить файл</button>\r\n        <context-menu #static>\r\n          <ng-template contextMenuItem (execute)=\"openRenameFileModal(file.fileId)\">\r\n            Переименовать\r\n          </ng-template>\r\n          <ng-template contextMenuItem (execute)=\"openAddTagFileModal(file.fileId)\">\r\n            Добавить тег\r\n          </ng-template>\r\n          <ng-template contextMenuItem (execute)=\"callDownload(file.fileId)\">\r\n            Скачать файл\r\n          </ng-template>\r\n          <ng-template contextMenuItem (execute)=\"openDeleteFileModal(file.fileId)\">\r\n            Удалить файл\r\n          </ng-template>\r\n        </context-menu>\r\n      </div>\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"col-sm-2\">\r\n  <div class=\"button-group-right\">\r\n    <div>\r\n      <button class=\"button-color\" data-toggle=\"modal\" data-target=\"#uploadFileModal\">Загрузить файл</button>\r\n    </div>\r\n    <div>\r\n      <button class=\"button\" data-toggle=\"modal\" data-target=\"#createFolderModal\">Создать папку</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"createFolderModal\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content custom-modal\">\r\n      <div class=\"modal-header custom-header\">\r\n        <h4 class=\"modal-title\">Создание папки</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form name=\"form\" (ngSubmit)=\"formCreate.form.valid && createfolder(formCreate)\" #formCreate=\"ngForm\" novalidate>\r\n          <div class=\"form-group\">\r\n            <label for=\"foldername\"></label>\r\n            <input type=\"text\" class=\"form-control form-control-on-add-folder\" name=\"foldername\" placeholder=\"Имя папки\" [(ngModel)]=\"model.foldername\"\r\n              #foldername=\"ngModel\" required maxlength=\"50\" />\r\n            <div *ngIf=\"formCreate.submitted && !foldername.valid\" class=\"alerts\">\r\n                Имя папки необходимо.\r\n            </div>\r\n            <!-- <div *ngIf=\"f.submitted && !name.valid\" class=\"help-block\">Имя пользователя необходимо</div> -->\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <button class=\"button-transparent\" data-dismiss=\"modal\" #closeCreateFolderModal>Отмена</button>\r\n            <button class=\"button-color\">Готово</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"uploadFileModal\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content custom-modal\">\r\n      <div class=\"modal-header custom-header\">\r\n        <h4 class=\"modal-title\">Загрузка файлов\r\n          <span class=\"img-tag\">\r\n            <img src=\"assets\\icons\\reload.svg\" class=\"img-tag pull-right\" [class.rotating-animation-in-upload]=\"this.loading == true\">\r\n          </span>\r\n        </h4>\r\n      </div>\r\n      <div class=\"modal-body modal-body-on-upload-files\">\r\n        <div class=\"file_upload\">\r\n          <button type=\"button\">Выбрать</button>\r\n\r\n          <input type=\"file\" #inputfiles (change)=\"onChange(inputfiles.files)\" placeholder=\"Upload file\" accept=\".jpg,.png,.avi,.mov,.mkv\"\r\n            multiple>\r\n        </div>\r\n        <table class=\"custom-table\">\r\n\r\n          <tr *ngFor=\"let f of uploadFiles; let i = index\">\r\n            <td>\r\n              <img src=\"assets\\icons\\success.svg\" width=\"20\" height=\"20\" *ngIf=\"checkIfValid(f).length == 0\">\r\n              <img src=\"assets\\icons\\minus.svg\" width=\"20\" height=\"20\" *ngIf=\"checkIfValid(f).length > 0\">\r\n            </td>\r\n            <td>\r\n              <img src=\"assets\\icons\\picture.svg\" width=\"20\" height=\"20\" *ngIf=\"checkIfImage(f.name)\">\r\n              <img src=\"assets\\icons\\video-player.svg\" width=\"20\" height=\"20\" *ngIf=\"!checkIfImage(f.name)\">\r\n            </td>\r\n            <td class=\"name-file-in-table\">{{f.name}}\r\n              <div class=\"errors-in-upload\">{{checkIfValid(f)}}</div>\r\n            </td>\r\n            <td>\r\n              <form name=\"form\" #frm=\"ngForm\" novalidate>\r\n                <div>\r\n                  <input type=\"text\" class=\"form-control-on-upload-file\" name=\"f.name-{{i}}\" placeholder=\"+Добавить тег\" [(ngModel)]=\"f.hashtag\"\r\n                    #hashtag=\"ngModel\" />\r\n                  <div *ngIf=\"hashtag.errors && (hashtag.dirty && hashtag.touched)\" class=\"alerts\">\r\n                    <br>\r\n                    <div [hidden]=\"!hashtag.errors\">\r\n                      Введите корректный тег.\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </td>\r\n\r\n          </tr>\r\n\r\n        </table>\r\n        <div class=\"right-for-upload\">\r\n          <button class=\"button-transparent\" data-dismiss=\"modal\" #closeUploadFileModal>Отмена</button>\r\n          <button class=\"button-color\" (click)=\"uploadFile()\">Готово</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"renameFolderModal\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content custom-modal\">\r\n      <div class=\"modal-header custom-header\">\r\n        <h4 class=\"modal-title\">Переименовать папку</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form name=\"formrenamev\" (ngSubmit)=\"formrename.valid && renamefolder(formrename)\" #formrename=\"ngForm\" novalidate>\r\n          <div class=\"form-group\">\r\n            <label for=\"folderrename\"></label>\r\n            <input type=\"text\" class=\"form-control form-control-on-add-folder\" name=\"folderrename\" placeholder=\"Имя папки\" [(ngModel)]=\"folderrenamem.name\"\r\n              #folderrename=\"ngModel\" required maxlength=\"50\" />\r\n            <div *ngIf=\"formrename.submitted && !folderrename.valid\" class=\"alerts\">\r\n                Имя папки необходимо.\r\n            </div>\r\n            <!-- <div *ngIf=\"f.submitted && !name.valid\" class=\"help-block\">Имя пользователя необходимо</div> -->\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <button class=\"button-transparent\" data-dismiss=\"modal\" #closeRenameFolderModal>Отмена</button>\r\n            <button class=\"button-color\">Готово</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"addTagFolderModal\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content custom-modal\">\r\n      <div class=\"modal-header custom-header\">\r\n        <h4 class=\"modal-title\">Добавить тег\r\n          <span class=\"img-tag\">\r\n            <img src=\"assets\\icons\\tag-black-shape.svg\" class=\"img-tag pull-right\">\r\n          </span>\r\n        </h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n        <form name=\"formAddTags\" (ngSubmit)=\"formAT.valid && addTags(formAT)\" #formAT=\"ngForm\" novalidate>\r\n          <div class=\"form-group\">\r\n            <label for=\"tags\"></label>\r\n            <textarea cols=\"40\" rows=\"5\" class=\"form-control huge-input\" [(ngModel)]=\"model.tags\" name=\"tags\" id=\"tags\" #tags=\"ngModel\"\r\n              required></textarea>\r\n\r\n            <div *ngIf=\"formAT.submitted && !tags.valid\" class=\"alerts\">\r\n              Теги необходимы.\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group right\">\r\n            <div [hidden]=\"true\">\r\n              <button class=\"button-transparent\" data-dismiss=\"modal\" #closeAddTagFolderModal>Отмена</button>\r\n            </div>\r\n            <span class=\"max-tag-text pull-left\">Максимальное\r\n              <br>количество тегов - 200</span>\r\n            <button class=\"button-color\">Добавить</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"deleteFolderModal\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content custom-modal\">\r\n      <div class=\"modal-body\" padding=\"30\">\r\n        <div class=\"text-deleted\">Вы уверенны, что хотите удалить эту папку?</div>\r\n        <div class=\"form-group\">\r\n          <button class=\"button-color\" data-dismiss=\"modal\" #closeDeleteFolderModal>Ой, нет!</button>\r\n          <button class=\"button-transparent\" (click)=\"deleteFolder()\">Да, удалить</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- files -->\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"renameFileModal\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content custom-modal\">\r\n      <div class=\"modal-header custom-header\">\r\n        <h4 class=\"modal-title\">Переименовать файл</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form name=\"formrenamev\" (ngSubmit)=\"formrenameFile.valid && renameFile(formrenameFile)\" #formrenameFile=\"ngForm\" novalidate>\r\n          <div class=\"form-group\" [ngClass]=\"{ 'has-error': formrenameFile.submitted && !formrenameFile.valid }\">\r\n            <label for=\"folderrename\"></label>\r\n            <input type=\"text\" class=\"form-control form-control-on-add-folder\" name=\"renameFile\" placeholder=\"Имя файла\" [(ngModel)]=\"model.renameFile\"\r\n              #folderrename=\"ngModel\" required maxlength=\"47\" />\r\n            <div *ngIf=\"formrenameFile.submitted && !renameFile.valid\" class=\"alerts\">\r\n                Имя файла необходимо.\r\n            </div>\r\n            <!-- <div *ngIf=\"f.submitted && !name.valid\" class=\"help-block\">Имя пользователя необходимо</div> -->\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <button class=\"button-transparent\" data-dismiss=\"modal\" #closeRenameFileModal>Отмена</button>\r\n            <button class=\"button-color\">Готово</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"addTagFileModal\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content custom-modal\">\r\n      <div class=\"modal-header custom-header\">\r\n        <h4 class=\"modal-title\">Добавить тег\r\n          <span class=\"img-tag\">\r\n            <img src=\"assets\\icons\\tag-black-shape.svg\" class=\"img-tag pull-right\">\r\n          </span>\r\n        </h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n        <form name=\"form\" (ngSubmit)=\"f.form.valid && addTagsFile(f)\" #f=\"ngForm\" novalidate>\r\n          <div class=\"form-group\">\r\n            <label for=\"tags\"></label>\r\n            <textarea cols=\"40\" rows=\"5\" class=\"form-control huge-input\" [(ngModel)]=\"model.tags\" name=\"tags\" id=\"tags\" #tags=\"ngModel\"\r\n              required></textarea>\r\n\r\n            <div *ngIf=\"f.submitted && !tags.valid\" class=\"alerts\">Теги необходимы</div>\r\n          </div>\r\n          <div class=\"form-group right\">\r\n            <div [hidden]=\"true\">\r\n              <button class=\"button-transparent\" data-dismiss=\"modal\" #closeAddTagFileModal>Отмена</button>\r\n            </div>\r\n            <span class=\"max-tag-text pull-left\">Максимальное\r\n              <br>количество тегов - 200</span>\r\n            <button class=\"button-color\">Добавить</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"deleteFileModal\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content custom-modal\">\r\n      <div class=\"modal-body\" padding=\"30\">\r\n        <div class=\"text-deleted\">Вы уверенны, что хотите удалить этот файл?</div>\r\n        <div class=\"form-group\">\r\n          <button class=\"button-color\" data-dismiss=\"modal\" #closeDeleteFileModal>Ой, нет!</button>\r\n          <button class=\"button-transparent\" (click)=\"deleteFile()\">Да, удалить</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<simple-notifications [options]=\"options\"></simple-notifications>\r\n\r\n<div *ngIf=\"showImage\" class=\"carousel\" role=\"dialog\">\r\n  <div class=\"right-side\">\r\n    <div (click)=\"this.showImage = false; this.srccarouselc='assets\\\\icons\\\\cancel.svg'\" class=\"cancel-area\" (mouseenter)=\"mouse('srccarouselc', 'assets\\\\icons\\\\cancel-hover.svg')\"\r\n      (mouseleave)=\"mouse('srccarouselc', 'assets\\\\icons\\\\cancel.svg')\">\r\n      <img [src]=\"this.srccarouselc\" class=\"cancel-button\">\r\n    </div>\r\n    <div *ngIf=\"this.files[(this.getIfromId(this.fileToShow.fileId)*1 + 1)]\" class=\"navigation-right-area\" (click)=\"openImage(this.files[(this.getIfromId(this.fileToShow.fileId)*1 + 1)].fileId)\"\r\n      (mouseenter)=\"mouse('srccarouselr', 'assets\\\\icons\\\\next-hover.svg')\" (mouseleave)=\"mouse('srccarouselr', 'assets\\\\icons\\\\next.svg')\">\r\n      <img [src]=\"this.srccarouselr\" class=\"right-button\">\r\n    </div>\r\n  </div>\r\n  <div>\r\n\r\n    <div *ngIf=\"this.files[(this.getIfromId(this.fileToShow.fileId) - 1)]; else placeForLeft\" (click)=\"openImage(this.files[(this.getIfromId(this.fileToShow.fileId) - 1)].fileId)\"\r\n      (mouseenter)=\"mouse('srccarousell', 'assets\\\\icons\\\\next-hover.svg')\" (mouseleave)=\"mouse('srccarousell', 'assets\\\\icons\\\\next.svg')\"\r\n      class=\"navigation-left-area\">\r\n      <img [src]=\"this.srccarousell\" class=\"left-button rotateimg180\">\r\n    </div>\r\n    <ng-template #placeForLeft>\r\n      <div class=\"navigation-left-area\"></div>\r\n    </ng-template>\r\n  </div>\r\n\r\n  <div class=\"middle\">\r\n    <div class=\"whiteblock\">\r\n      <span class=\"modal-title pull-left\">{{this.fileToShow.name}}\r\n        <br>{{this.fileToShow.size | bytes}}</span>\r\n      <button class=\"button-color pull-right\" (click)=\"callDownload(this.fileToShow.fileId)\">Скачать</button>\r\n      <div class=\"image-container\">\r\n        <img [src]=\"this.sanitize(URL)\" [class.rotating-animation]=\"this.URL == 'assets\\\\icons\\\\reload.svg'\">\r\n      </div>\r\n      <div class=\"carousel-tags\">\r\n        <span *ngFor=\"let tag of this.fileToShow.tagList\">\r\n          #{{tag}}\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/_components/data/data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_service__ = __webpack_require__("../../../../../src/app/_components/home/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_sortType__ = __webpack_require__("../../../../../src/app/_components/menu/sortType.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_contextmenu__ = __webpack_require__("../../../../ngx-contextmenu/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DataComponent = (function () {
    function DataComponent(homeService, router, route, notificationsService, sanitizer) {
        this.homeService = homeService;
        this.router = router;
        this.route = route;
        this.notificationsService = notificationsService;
        this.sanitizer = sanitizer;
        this.model = {};
        this.folders = [];
        this.files = [];
        this.folderrenamem = {};
        this.options = {
            position: ["bottom", "right"],
            timeOut: 3000,
            showProgressBar: true,
            pauseOnHover: true,
            clickToClose: true,
            clickIconToClose: true,
            lastOnBottom: true,
            maxLength: 500
        };
        this.SortType = __WEBPACK_IMPORTED_MODULE_4__menu_sortType__["a" /* SortType */];
        this.showImage = false;
        this.srccarousell = "assets\\icons\\next.svg";
        this.srccarouselr = "assets\\icons\\next.svg";
        this.srccarouselc = "assets\\icons\\cancel.svg";
        this.URL = "assets\\icons\\reload.svg";
        this.loading = false;
    }
    DataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params
            .switchMap(function (params) {
            _this.folderId = params['folderId'];
            console.log('ngOnInit datac', _this.folderId);
            _this.loadFiles();
            return _this.homeService.loadFolders(_this.folderId);
        })
            .subscribe(function (res) { return _this.folders = res; });
        if (JSON.parse(localStorage.getItem('grid')) === null) {
            this.grid = true;
        }
        else {
            this.grid = JSON.parse(localStorage.getItem('grid'));
        }
    };
    //this.loadRootFiles();
    // ngOnInit() {
    //     this.loadRootFolders();
    //     this.loadRootFiles();
    //     this.grid = true;
    // }
    //initial
    DataComponent.prototype.loadFolders = function () {
        var _this = this;
        this.homeService.loadFolders(this.folderId).subscribe(function (data) {
            if (!data.success && data.message) {
                console.log(data.message);
                _this.pushErrorNotification('Загрузка папок прошла неуспешно. ' + data.message);
            }
            else {
                console.log('Loading folders successfull');
            }
            _this.folders = data;
        }, function (error) {
            _this.pushErrorNotification('Загрузка папок прошла неуспешно');
            console.log('Loading folders unsuccessfull');
        });
    };
    DataComponent.prototype.loadFiles = function () {
        var _this = this;
        this.homeService.loadFiles(this.folderId).subscribe(function (data) {
            if (!data.success && data.message) {
                console.log(data.message, _this.folderId);
                _this.pushErrorNotification('Загрузка файлов прошла неуспешно. ' + data.message);
            }
            else {
                console.log('Loading files successfull ', _this.folderId);
                _this.files = data;
                for (var _a = 0, _b = _this.files; _a < _b.length; _a++) {
                    var file = _b[_a];
                    if (_this.checkIfJpg(file.name) == true) {
                        file.resizedImage = 'data:image/jpg;base64,' + file.resizedImage;
                    }
                    else {
                        file.resizedImage = 'data:image/png;base64,' + file.resizedImage;
                    }
                    console.log(file.resizedImage);
                }
            }
        }, function (error) {
            //show info about error
            console.log('Loading files unsuccessfull ', _this.folderId);
            _this.pushErrorNotification('Загрузка файлов прошла неуспешно.');
        });
    };
    //menu
    DataComponent.prototype.createfolder = function (form) {
        var _this = this;
        this.homeService.createfolder(this.model.foldername, this.folderId)
            .subscribe(function (data) {
            if (!data.success && data.message) {
                console.log(data.message);
                _this.pushErrorNotification('Создание папки прошло неуспешно. ' + data.message);
            }
            else {
                console.log('Creating folder successfull', data);
                _this.pushSuccessNotification('Создание папки прошло успешно.');
            }
            _this.closeCreateFolderModal.nativeElement.click();
            _this.loadFolders();
            form.resetForm();
        }, function (error) {
            console.log('Cant create folder', error);
            _this.closeCreateFolderModal.nativeElement.click();
            _this.pushErrorNotification('Создание папки прошло неуспешно.');
            form.resetForm();
        });
    };
    DataComponent.prototype.uploadFile = function (form) {
        var _this = this;
        var fi = this.inputfiles.nativeElement;
        for (var _i = 0; _i < fi.files.length; _i++) {
            this.loading = true;
            if (this.checkIfValid(fi.files[_i]) == "") {
                var formData = new FormData();
                formData.append('FileContent', fi.files[_i]);
                formData.append('CreationDate', fi.files[_i].lastModifiedDate.toUTCString());
                formData.append('ParentFolderId', this.folderId);
                formData.append('Tags', this.uploadFiles[_i].hashtag ? this.uploadFiles[_i].hashtag : "");
                var creationDate = new Date(fi.files[_i].lastModifiedDate);
                this.homeService.uploadFile(formData)
                    .subscribe(function (data) {
                    _this.loading = false;
                    if (!data.success && data.message) {
                        console.log(data.message);
                        _this.pushErrorNotification('Загрузка файла ' + data.fileName + ' прошла неуспешно. ' + data.message);
                        console.log('name file', fi.files[0], _i);
                    }
                    else {
                        console.log('upload file success');
                        _this.pushSuccessNotification('Загрузка файла ' + data.fileName + ' прошла успешно.');
                    }
                    _this.closeUploadFileModal.nativeElement.click();
                    _this.loadFiles();
                }, function (error) {
                    _this.loading = false;
                    console.log('Cant upload file', error);
                    _this.closeUploadFileModal.nativeElement.click();
                    _this.pushErrorNotification('Загрузка файла прошла неуспешно.');
                });
            }
        }
    };
    //folders
    DataComponent.prototype.renamefolder = function (form) {
        var _this = this;
        var folderId = this.selectedObjectId;
        console.log(this.folderrenamem.name, folderId);
        this.homeService.renameFolder(this.folderrenamem.name, folderId)
            .subscribe(function (data) {
            if (!data.success && data.message) {
                console.log(data.message);
                _this.pushErrorNotification('Переименование папки прошло неуспешно. ' + data.message);
            }
            else {
                _this.pushSuccessNotification('Переименование папки прошло успешно.');
                console.log('Renaming folder successfull for ', folderId);
            }
            _this.closeRenameFolderModal.nativeElement.click();
            _this.loadFolders();
            form.resetForm();
        }, function (error) {
            _this.loadFolders();
            _this.closeRenameFolderModal.nativeElement.click();
            console.log('Cant rename folderfor ', folderId);
            _this.pushErrorNotification('Переименование папки прошло неуспешно.');
            form.resetForm();
        });
    };
    DataComponent.prototype.deleteFolder = function () {
        var _this = this;
        var folderId = this.selectedObjectId;
        this.homeService.deleteFolder(folderId)
            .subscribe(function (data) {
            if (!data.success && data.message) {
                console.log(data.message);
                _this.pushErrorNotification('Удаление папки прошло неуспешно. ' + data.message);
            }
            else {
                console.log('Delete folder successfull');
            }
            _this.closeDeleteFolderModal.nativeElement.click();
            _this.loadFolders();
        }, function (error) {
            _this.closeDeleteFolderModal.nativeElement.click();
            console.log('Cant delete folder');
            _this.pushErrorNotification('Удаление папки прошло неуспешно.');
        });
    };
    DataComponent.prototype.addTags = function (form) {
        var _this = this;
        var folderId = this.selectedObjectId;
        this.homeService.addTags(folderId, this.model.tags)
            .subscribe(function (data) {
            if (!data.success && data.message) {
                console.log(data.message);
                _this.pushErrorNotification('Добавление тегов прошло неуспешно. ' + data.message);
            }
            else {
                console.log('Add tags successfull');
            }
            _this.closeAddTagFolderModal.nativeElement.click();
            _this.loadFolders();
            form.resetForm();
        }, function (error) {
            _this.closeAddTagFolderModal.nativeElement.click();
            console.log('Cant add tags');
            _this.pushErrorNotification('Добавление тегов прошло неуспешно.');
            form.resetForm();
        });
    };
    //files
    DataComponent.prototype.renameFile = function (form) {
        var _this = this;
        var fileId = this.selectedObjectId;
        console.log(this.model.renameFile, fileId);
        this.homeService.renameFile(this.model.renameFile, fileId)
            .subscribe(function (data) {
            if (!data.success && data.message) {
                console.log(data.message);
                _this.pushErrorNotification('Переименование файла прошло неуспешно. ' + data.message);
            }
            else {
                console.log('Renaming file successfull for ', fileId);
            }
            _this.closeRenameFileModal.nativeElement.click();
            _this.loadFiles();
            form.resetForm();
        }, function (error) {
            _this.closeRenameFileModal.nativeElement.click();
            console.log('Cant rename file for ', fileId);
            _this.pushErrorNotification('Переименование файла прошло неуспешно.');
            form.resetForm();
        });
    };
    DataComponent.prototype.deleteFile = function () {
        var _this = this;
        var fileId = this.selectedObjectId;
        this.homeService.deleteFile(fileId)
            .subscribe(function (data) {
            if (!data.success && data.message) {
                console.log(data.message);
                _this.pushErrorNotification('Удаление файла прошло неуспешно. ' + data.message);
            }
            else {
                console.log('Delete file successfull');
            }
            _this.closeDeleteFileModal.nativeElement.click();
            _this.loadFiles();
        }, function (error) {
            _this.closeDeleteFileModal.nativeElement.click();
            console.log('Cant delete file');
            _this.pushErrorNotification('Удаление файла прошло неуспешно.');
        });
    };
    DataComponent.prototype.addTagsFile = function (form) {
        var _this = this;
        var fileId = this.selectedObjectId;
        this.homeService.addTagsFile(fileId, this.model.tags)
            .subscribe(function (data) {
            if (!data.success && data.message) {
                console.log(data.message);
                _this.pushErrorNotification('Добавление тегов прошло неуспешно. ' + data.message);
            }
            else {
                console.log('Add tags successfull');
            }
            _this.closeAddTagFileModal.nativeElement.click();
            _this.loadFiles();
            form.resetForm();
        }, function (error) {
            _this.closeAddTagFileModal.nativeElement.click();
            console.log('Cant add tags');
            _this.pushErrorNotification('Добавление тегов прошло неуспешно.');
            form.resetForm();
        });
    };
    //folders
    DataComponent.prototype.openRenameFolderModal = function (folderId) {
        document.getElementById("openRenameFolderModalButton").click();
        console.log('modal for rename open ', folderId);
        this.selectedObjectId = folderId;
    };
    DataComponent.prototype.openAddTagFolderModal = function (folderId) {
        document.getElementById("openAddTagFolderModalButton").click();
        console.log('modal for add tag open ', folderId);
        this.selectedObjectId = folderId;
    };
    DataComponent.prototype.callDownloadZIP = function (folderId) {
        var _this = this;
        this.selectedObjectId = folderId;
        this.homeService.downloadZIP(folderId)
            .subscribe(function (data) {
            console.log('Download zip successfull');
            var fileExtension = data.type.substring(data.type.lastIndexOf("/") + 1, data.type.length);
            var filename = 'file.' + fileExtension;
            Object(__WEBPACK_IMPORTED_MODULE_7_file_saver__["saveAs"])(data, _this.folders[_this.getIfromId(folderId)].name + '.' + fileExtension);
        }, function (error) {
            console.log('Cant download');
            _this.pushErrorNotification('Скачивание zip прошло неуспешно.');
        });
    };
    DataComponent.prototype.openDeleteFolderModal = function (folderId) {
        document.getElementById("openDeleteFolderModalButton").click();
        console.log('modal for deleting open ', folderId);
        this.selectedObjectId = folderId;
    };
    //files
    DataComponent.prototype.openRenameFileModal = function (fileId) {
        document.getElementById("openRenameFileModalButton").click();
        console.log('modal for rename open ', fileId);
        this.selectedObjectId = fileId;
    };
    DataComponent.prototype.openAddTagFileModal = function (fileId) {
        document.getElementById("openAddTagFileModalButton").click();
        console.log('modal for add tag open ', fileId);
        this.selectedObjectId = fileId;
    };
    DataComponent.prototype.callDownload = function (fileId) {
        var _this = this;
        this.selectedObjectId = fileId;
        this.homeService.downloadFile(fileId)
            .subscribe(function (data) {
            console.log('Download successfull');
            var fileExtension = data.type.substring(data.type.lastIndexOf("/") + 1, data.type.length);
            var filename = 'file.' + fileExtension;
            Object(__WEBPACK_IMPORTED_MODULE_7_file_saver__["saveAs"])(data, _this.files[_this.getIfromId(fileId)].name);
        }, function (error) {
            console.log('Cant download');
            _this.pushErrorNotification('Скачивание файла прошло неуспешно.');
        });
    };
    DataComponent.prototype.openDeleteFileModal = function (fileId) {
        document.getElementById("openDeleteFileModalButton").click();
        console.log('modal for deleting open ', fileId);
        this.selectedObjectId = fileId;
    };
    DataComponent.prototype.search = function (searchModel) {
        var _this = this;
        this.homeService.search(searchModel.text, searchModel.fileTypeSearch)
            .subscribe(function (data) {
            if (!data.success && data.message) {
                console.log(data.message);
            }
            else {
                console.log('seacrh successfull');
            }
            _this.files = data;
            _this.folders = [];
        }, function (error) {
            _this.closeAddTagFileModal.nativeElement.click();
            console.log('Cant search');
        });
    };
    DataComponent.prototype.toggleGrid = function (res) {
        this.grid = res;
    };
    DataComponent.prototype.moveToSelectedFolder = function (folderId, folderName) {
        this.router.navigate(['', folderId]);
    };
    DataComponent.prototype.onChange = function (files) {
        this.uploadFiles = files;
    };
    DataComponent.prototype.checkIfImage = function (name) {
        var fileExtension = "";
        if (name.lastIndexOf(".") > 0) {
            fileExtension = name.substring(name.lastIndexOf(".") + 1, name.length);
        }
        if (fileExtension.toLowerCase() == "jpg" || "png") {
            return true;
        }
        else {
            return false;
        }
    };
    DataComponent.prototype.checkIfValid = function (file) {
        var fileExtension = "";
        if (file.name.lastIndexOf(".") > 0) {
            fileExtension = file.name.substring(file.name.lastIndexOf(".") + 1, file.name.length);
        }
        if (!(fileExtension.toLowerCase() == "jpg" || "png" || "mov" || "avi" || "mkv")) {
            return "Тип файла не поддерживается";
        }
        else if (!(file.size < 50000000)) {
            return "Размер файла превышает 50MB";
        }
        else if (!(file.name.length < 50)) {
            return "Имя файла больше 50 символов";
        }
        else {
            return "";
        }
    };
    DataComponent.prototype.checkIfJpg = function (name) {
        var fileExtension = "";
        if (name.lastIndexOf(".") > 0) {
            fileExtension = name.substring(name.lastIndexOf(".") + 1, name.length);
        }
        if (fileExtension.toLowerCase() == "jpg") {
            return true;
        }
        if (fileExtension.toLowerCase() == "png") {
            return false;
        }
        else {
            return false;
        }
    };
    DataComponent.prototype.pushSuccessNotification = function (message, options) {
        this.notificationsService.success('Ура!', message, options);
    };
    DataComponent.prototype.pushErrorNotification = function (message, options) {
        this.notificationsService.error('Упс!', message, options);
    };
    DataComponent.prototype.sort = function (sortType) {
        var swapped = true;
        var z = 0;
        while (swapped) {
            swapped = false;
            for (var _i = 0; _i < this.files.length - 1 - z; _i++) {
                if (this.files[_i][__WEBPACK_IMPORTED_MODULE_4__menu_sortType__["a" /* SortType */][sortType]] > this.files[_i + 1][__WEBPACK_IMPORTED_MODULE_4__menu_sortType__["a" /* SortType */][sortType]]) {
                    var buf = this.files[_i];
                    this.files[_i] = this.files[_i + 1];
                    this.files[_i + 1] = buf;
                    swapped = true;
                }
            }
            z++;
        }
    };
    DataComponent.prototype.openImage = function (fileId) {
        var _this = this;
        this.showImage = true;
        this.fileToShow = this.files[this.getIfromId(fileId)];
        this.mouse('srccarouselr', 'assets\\icons\\next.svg');
        this.mouse('srccarousell', 'assets\\icons\\next.svg');
        this.URL = "assets\\icons\\reload.svg";
        this.homeService.downloadFile(fileId)
            .subscribe(function (data) {
            _this.createImageFromBlob(data);
        });
    };
    DataComponent.prototype.createImageFromBlob = function (image) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            _this.URL = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    DataComponent.prototype.sanitize = function (url) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    };
    DataComponent.prototype.mouse = function (srccarousel, src) {
        this[srccarousel] = src;
    };
    DataComponent.prototype.getIfromId = function (id) {
        for (var i in this.files) {
            if (this.files[i].fileId === id) {
                return i;
            }
        }
        for (var i in this.folders) {
            if (this.folders[i].folderId === id) {
                return i;
            }
        }
    };
    return DataComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeCreateFolderModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], DataComponent.prototype, "closeCreateFolderModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeUploadFileModal'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], DataComponent.prototype, "closeUploadFileModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeRenameFolderModal'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object)
], DataComponent.prototype, "closeRenameFolderModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeAddTagFolderModal'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object)
], DataComponent.prototype, "closeAddTagFolderModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeDeleteFolderModal'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _e || Object)
], DataComponent.prototype, "closeDeleteFolderModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeRenameFileModal'),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _f || Object)
], DataComponent.prototype, "closeRenameFileModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeAddTagFileModal'),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _g || Object)
], DataComponent.prototype, "closeAddTagFileModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeDeleteFileModal'),
    __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _h || Object)
], DataComponent.prototype, "closeDeleteFileModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("inputfiles"),
    __metadata("design:type", Object)
], DataComponent.prototype, "inputfiles", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5_ngx_contextmenu__["a" /* ContextMenuComponent */]),
    __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_contextmenu__["a" /* ContextMenuComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_contextmenu__["a" /* ContextMenuComponent */]) === "function" && _j || Object)
], DataComponent.prototype, "basicMenu", void 0);
DataComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-data',
        template: __webpack_require__("../../../../../src/app/_components/data/data.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_3__home_home_service__["a" /* HomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__home_home_service__["a" /* HomeService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__["NotificationsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__["NotificationsService"]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["DomSanitizer"]) === "function" && _p || Object])
], DataComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
//# sourceMappingURL=data.component.js.map

/***/ }),

/***/ "../../../../../src/app/_components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fill { \r\n    min-height: 100vh;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center\r\n}\r\n\r\n.vertical-align {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    text-align: center;\r\n    margin-top: 200px; \r\n}\r\n\r\n.align-center{\r\n    margin: auto;\r\n}\r\n\r\n.col-md-6 > .button-color{\r\n    margin-top: 50px; \r\n}\r\n.button {\r\n    background-color: transparent !important;\r\n    width: 200px;\r\n    height: 60px;\r\n    color: #423f41;\r\n    padding: 9px 0px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    margin: 0px 0px;\r\n    cursor: pointer;\r\n    border-radius: 30px; /* Safari */\r\n    transition-duration: 0.4s;\r\n    border: 2px solid #34d3bb;\r\n    margin-top: 10px;\r\n    font-family: Raleway-SemiBold;\r\n    letter-spacing: 1px;\r\n    font-size: 1.4em;\r\n}\r\n\r\n.button:focus {\r\n    outline:0;\r\n}\r\n\r\n.button:hover {\r\n    background-color: #34d3bb !important;\r\n    color: white;\r\n    border: 2px solid #34d3bb;\r\n}\r\n\r\n.button-color {\r\n    background-color: #34d3bb !important;\r\n    width: 200px;\r\n    height: 60px;\r\n    color: white;\r\n    padding: 9px 0px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    margin: 0px 0px;\r\n    cursor: pointer;\r\n    border-radius: 30px; /* Safari */\r\n    transition-duration: 0.4s;\r\n    border: 2px solid #34d3bb;\r\n    margin-top: 10px;\r\n    font-family: Raleway-SemiBold;\r\n    letter-spacing: 1px;\r\n    font-size: 1.4em;\r\n}\r\n\r\n.button-color:focus {\r\n    outline:0;\r\n}\r\n\r\n.button-color:hover {\r\n    background-color: #34d3bb !important;\r\n    color: white;\r\n    border: 2px solid #34d3bb;\r\n}\r\n\r\n.button-transparent {\r\n    background-color: transparent !important;\r\n    width: 200px;\r\n    height: 60px;\r\n    color: #423f41;\r\n    padding: 9px 0px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    margin: 0px 0px;\r\n    cursor: pointer;\r\n    border-radius: 30px; /* Safari */\r\n    transition-duration: 0.4s;\r\n    border: 2px solid transparent;\r\n    margin-top: 10px;\r\n    font-family: Raleway-SemiBold;\r\n    letter-spacing: 1px;\r\n    font-size: 1.4em;\r\n}\r\n\r\n.button-transparent:focus {\r\n    outline:0;\r\n}\r\n\r\n.button-transparent:hover {\r\n    background-color: #34d3bb !important;\r\n    color: white;\r\n    border: 2px solid #34d3bb;\r\n}\r\n\r\n.button-group-right{\r\n\r\n    padding-top: 67px;\r\n}\r\n\r\n.form-control-on-upload-file {\r\n    width: 100%;\r\n    border: none !important;\r\n    color: #333333 !important;\r\n    font-family: Raleway-SemiBold;\r\n    letter-spacing: 1px;\r\n    font-size: 1.2em;\r\n}\r\n\r\n.modal-body-on-upload-files{\r\n    padding: 0px !important;\r\n}\r\n\r\n.form-control-on-upload-file:focus {\r\n    outline:0;\r\n}\r\n\r\n.form-control-on-upload-file::-webkit-input-placeholder {\r\n    color: #333333 !important;\r\n}\r\n\r\n.form-control-on-upload-file:-ms-input-placeholder {\r\n    color: #333333 !important;\r\n}\r\n\r\n.form-control-on-upload-file::placeholder {\r\n    color: #333333 !important;\r\n}\r\n\r\n.form-control-on-add-folder {\r\n    height: 60px !important;\r\n    border: 2px solid #999999 !important;\r\n    border-radius: 4px !important; \r\n    padding-left: 20px !important; \r\n    color: #7a7a7a;\r\n    font-family: Raleway-SemiBold;\r\n    letter-spacing: 1px;\r\n    font-size: 1.2em;\r\n}\r\n\r\n.form-control-on-add-folder:focus {\r\n    outline:0;\r\n}\r\n\r\n.success{\r\n    font-size: 3.1em;\r\n    letter-spacing: 7px;\r\n    color: #333333;\r\n    font-family: Raleway-Black;\r\n    border-bottom: 2px solid #f0f1f7;\r\n    text-align: center;\r\n}\r\n\r\n.text{\r\n    margin: 15px;\r\n    color:  #7a7a7a !important;\r\n    height: 60px !important;\r\n    font-family: Raleway-SemiBold;\r\n    letter-spacing: 1px;\r\n    font-size: 1.2em;\r\n    text-align: center;\r\n}\r\n\r\n.text-deleted{\r\n    padding: 20px;\r\n    margin-left: 60px;\r\n    margin-right: 60px; \r\n    color:  #7a7a7a !important;\r\n    font-family: Raleway-Bold;\r\n    letter-spacing: 1px;\r\n    font-size: 1.8em;\r\n    text-align: center;\r\n}\r\n\r\n.title-f{ \r\n    color:  #7a7a7a !important;\r\n    margin-top: 40px;\r\n    font-family: Raleway-SemiBold;\r\n    letter-spacing: 1px;\r\n    font-size: 1.2em;\r\n}\r\n.placefornav{\r\n    height: 140px;\r\n}\r\n\r\n.file_upload{\r\n    position: relative;\r\n    overflow: hidden;\r\n    font-size: 1em;        /* example */\r\n    height: 2em;           /* example */\r\n    line-height: 2em;\r\n    margin: 5px;       /* the same as height */\r\n}\r\n\r\n.file_upload > button{\r\n    float: right;\r\n    width: 8em;            /* example */\r\n    height: 100%;\r\n    background-color: #34d3bb !important;\r\n    color: white;\r\n    font-family: Raleway-SemiBold;\r\n    letter-spacing: 1px;\r\n    font-size: 1.2em;\r\n    border-radius: 30px;\r\n    border: 2px solid #34d3bb;\r\n\r\n}\r\n.file_upload > div{\r\n    padding-left: 1em      /* example */\r\n}\r\n\r\n.file_upload input[type=file]{\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    -webkit-transform: scale(20);\r\n            transform: scale(20);\r\n    letter-spacing: 10em;     /* IE 9 fix */\r\n    -ms-transform: scale(20); /* IE 9 fix */\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    overflow: hidden;\r\n}\r\n\r\n.custom-header{\r\n    background-color: #f0f1f7 !important;\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n}\r\n\r\n.custom-modal{\r\n    border-radius: 10px;\r\n}\r\n\r\n.modal-title{\r\n    color: #333333;\r\n    font-family: Raleway-Bold;\r\n    font-size: 1.4em;\r\n    padding: 5px;\r\n}\r\n\r\n.modal {\r\n    text-align: center;\r\n}\r\n\r\n.modal-body{\r\n    padding: 30px;\r\n}\r\n  \r\n@media screen and (min-width: 768px) { \r\n    .modal:before {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    content: \" \";\r\n    height: 100%;\r\n    }\r\n}\r\n\r\n\r\n.modal-dialog {\r\n    display: inline-block;\r\n    text-align: left;\r\n    vertical-align: middle;\r\n}\r\n\r\n.name-file-in-table{\r\n    color:  #7a7a7a !important;\r\n    font-family: Raleway-SemiBold;\r\n    letter-spacing: 1px;\r\n    font-size: 1.2em;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis !important; \r\n    max-width: 230px;\r\n}\r\n\r\n.custom-table{\r\n    width: 100%;\r\n}\r\n\r\ntd {\r\n    padding: 10px;\r\n    text-align: left;\r\n    border-bottom: 1px solid #ddd;\r\n}\r\n\r\n.errors-in-upload{\r\n    color:  #d3095f !important;\r\n    font-family: Raleway-Bold;\r\n    font-size: 0.6em;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis !important; \r\n}\r\n\r\n.folder-grid{\r\n    background-color: #FFFFFF;\r\n    margin-top: 12px; /* Отступ сверху */\r\n    border-radius: 5px; /* Для Firefox */  \r\n    box-sizing: border-box; /* Ширина блока с полями */\r\n    box-shadow: 0px 3px 4px 0px #b9b9b9;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis !important; \r\n    word-wrap: break-word;\r\n    white-space: nowrap;\r\n    width: 100%;\r\n    color:  #7a7a7a;\r\n    text-align: left;\r\n    border: none;\r\n}\r\n\r\n.folder-grid:focus{\r\n    background-color: #34D3BB;\r\n    color: white;\r\n    outline: 0;\r\n}\r\n.folder-grid .st0{\r\n    fill: #898989;\r\n} \r\n\r\n.folder-grid:focus .st0{\r\n    fill: white;\r\n}\r\n\r\n.folder-list{\r\n    background-color: #FFFFFF;\r\n    margin-top: 10px; /* Отступ сверху */\r\n    border-radius: 5px; /* Для Firefox */  \r\n    box-sizing: border-box; /* Ширина блока с полями */\r\n    box-shadow: 0px 3px 4px 0px #b9b9b9;\r\n    padding: 0px;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis !important; \r\n    word-wrap: break-word;\r\n    white-space: nowrap;\r\n}\r\n\r\n.folder-grid-item{\r\n    padding: 20px;\r\n    font-family: Raleway-SemiBold;\r\n    letter-spacing: 1px;\r\n    font-size: 1.2em;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis !important; \r\n    word-wrap: break-word;\r\n    height: 63px;\r\n    white-space: nowrap;\r\n}\r\n.for-inline{\r\n    display: inline-block;\r\n    vertical-align: text-top;\r\n}\r\n\r\n.just-for-padding{\r\n    padding-left: 0px;\r\n}\r\n\r\n.img-folder{\r\n    width: 23px;\r\n    height: 23px;\r\n    margin-right: 10px;\r\n}\r\nbutton {\r\n    -webkit-appearance: button;\r\n    cursor: default;\r\n}\r\n.img-tag{\r\n    width: 30px;\r\n    height: 30px;\r\n    margin-right: 10px;\r\n    -ms-flex-line-pack: right;\r\n        align-content: right;\r\n    text-align: right;\r\n}\r\n\r\n.container-for-ff{\r\n    padding-left: 110px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.form-group{\r\n    text-align: center;\r\n}\r\n\r\n.right{\r\n    text-align: right;\r\n}\r\n\r\n.right-for-upload{\r\n    text-align: right;\r\n    padding: 20px;\r\n}\r\n\r\n.huge-input{\r\n    border-radius: 5px !important;\r\n    border: 2px solid #7a7a7a !important;\r\n    height: 200px !important;\r\n    resize: none;\r\n    color: #7a7a7a !important;\r\n    font-family: Raleway-SemiBold;\r\n    letter-spacing: 1px;\r\n    font-size: 1.2em;\r\n}\r\n\r\n.huge-input:focus {\r\n    outline:0;\r\n}\r\n\r\n.max-tag-text{\r\n    color: #7a7a7a !important;\r\n    font-family: Raleway-SemiBold;\r\n    letter-spacing: 1px;\r\n    font-size: 1em;\r\n    text-align: left !important;\r\n}\r\n\r\n.col-xs-3 {\r\n    width: 20% !important;\r\n}\r\n\r\n.carousel{\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-color: #e8e9ec; \r\n    z-index: 1090;\r\n    outline: 0;\r\n    vertical-align: middle;\r\n    display: block;\r\n    -webkit-animation: fadeInFromNone 0.3s ease-out;\r\n    animation: fadeInFromNone 0.3s ease-out;\r\n}\r\n\r\n@-webkit-keyframes fadeInFromNone {\r\n    0% {\r\n        display: none;\r\n        opacity: 0;\r\n    }\r\n    1% {\r\n        display: block;\r\n        opacity: 0;\r\n    }\r\n    100% {\r\n        display: block;\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n.cancel-area{\r\n    margin-top: 0;\r\n    margin-bottom: auto;\r\n    width: 100%;    \r\n    height: 20%;\r\n    float: right\r\n}\r\n\r\n.cancel-button{\r\n    margin: 40px;\r\n    height: 40px;\r\n    width: 40px; \r\n    float: right\r\n}\r\n\r\n.fill { \r\n    min-height: 100vh;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center\r\n}\r\n\r\n.whiteblock {\r\n    background-color: #FFFFFF;\r\n    border-radius: 5px;\r\n    padding: 30px; /* Для Firefox */  \r\n    box-sizing: border-box; /* Ширина блока с полями */\r\n    box-shadow: 0px 3px 4px 0px #b9b9b9;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n}\r\n\r\n.navigation-left-area{\r\n    top: 0;\r\n    width: 15%;\r\n    height: 100vh;\r\n    float: left;\r\n}\r\n\r\n.navigation-right-area{\r\n    width: 100%;\r\n    margin-top: auto;\r\n    margin-bottom: 0;\r\n    height: 80%;\r\n    float: right;\r\n}\r\n\r\n.left-button{\r\n    height: 40px;\r\n    width: 40px;\r\n    margin: 40px;  \r\n    margin-top: 40vh;\r\n}\r\n\r\n.rotateimg180 {\r\n    -webkit-transform:rotate(180deg);\r\n    transform: rotate(180deg);\r\n}\r\n\r\n.right-button{\r\n    height: 40px;\r\n    width: 40px;\r\n    margin: 40px;  \r\n    margin-top: 20vh;\r\n    float: right  \r\n}\r\n\r\n.right-side{\r\n    width: 15%;    \r\n    float: right; \r\n    height: 100%;    \r\n}\r\n\r\n.whiteblock>.modal-title{\r\n    color: #333333;\r\n    font-family: Raleway-Bold;\r\n    font-size: 1.4em;\r\n    text-align: left !important;\r\n}\r\n\r\n.carousel>.middle{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    height: 100vh;\r\n}\r\n\r\n.carousel-tags{\r\n    color:  #7a7a7a !important;\r\n    font-family: Raleway-SemiBold;\r\n    letter-spacing: 1px;\r\n    font-size: 1.2em;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis !important; \r\n    word-wrap: break-word;\r\n    max-height: 160px;\r\n}\r\n\r\n.image-container{\r\n    margin-top: 70px;\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;    \r\n    max-height: 80vh;  \r\n    -webkit-box-align: center;  \r\n        -ms-flex-align: center;  \r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center\r\n}\r\n\r\n.image-container> img{\r\n    max-height:100vh;\r\n    max-width:100vh;\r\n    -o-object-fit: contain;\r\n       object-fit: contain;\r\n    display: block;\r\n    margin: auto;\r\n}\r\n\r\n.rotating-animation{\r\n    width: 120px;\r\n    height: 120px;\r\n    -webkit-animation:spin 4s linear infinite;\r\n    animation:spin 4s linear infinite;\r\n}\r\n\r\n.rotating-animation-in-upload{\r\n    width: 30px;\r\n    height: 30px;\r\n    -webkit-animation:spin 4s linear infinite;\r\n    animation:spin 4s linear infinite;\r\n}\r\n@-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }\r\n@keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }\r\n\r\n.alerts {\r\n    padding: 0px;\r\n    margin:  0px;\r\n    color: #d3095f;\r\n    font-family: Raleway-Bold;\r\n    letter-spacing: 1px;\r\n    font-size: 1em;\r\n    text-align: left;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu (toggleGridEvent)=\"toggleGrid($event)\" (toggleSearchEvent)=\"search($event)\" (refreshEvent)=\"this.ngOnInit($event)\"\r\n  (sortEvent)=\"sort($event)\">\r\n</app-menu>\r\n<div class=\"placefornav\">\r\n\r\n</div>\r\n<div class=\"container vertical-align\" *ngIf=\"files?.length == 0 && folders?.length == 0\">\r\n  <div class=\"align-center\">\r\n    <div class=\"success\">Вы успешно зарегистрированы!</div>\r\n    <div class=\"row\">\r\n      <div class=\"text\">Теперь вы можете начать использовать LOGO!\r\n        <br>Загружайте свои файлы и делитесь ими\r\n        <br>с остальными пользователями!</div>\r\n    </div>\r\n    <div class=\"col-sm-8 col-sm-offset-2\">\r\n      <div class=\"col-md-6 col-md-offset-3\">\r\n        <button class=\"button-color\" data-toggle=\"modal\" data-target=\"#uploadFileModal\">Загрузить файл</button>\r\n      </div>\r\n      <div class=\"col-md-6 col-md-offset-3\">\r\n        <button class=\"button\" data-toggle=\"modal\" data-target=\"#createFolderModal\">Создать папку</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"col-sm-10 container-for-ff\">\r\n  <div *ngIf=\"grid\">\r\n    <div *ngIf=\"folders?.length > 0\">\r\n      <div class=\"title-f\">Папки</div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-3\" *ngFor=\"let folder of folders\">\r\n          <button class=\"folder-grid\" [contextMenu]=\"static\" (dblclick)=\"moveToSelectedFolder(folder.folderId, folder.name)\" e>\r\n            <div class=\"folder-grid-item\">\r\n              <div class=\"for-inline\">\r\n                <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                  viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\" class=\"img-folder\">\r\n                  <g>\r\n                    <path class=\"st0\" d=\"M119.5,200.5c-2.2,0-4.1,1.5-4.7,3.6L17.1,448v8.5c0,6.3-0.4,8.5,4.8,8.5h381.9c9.9,0,18.6-6.6,20.9-15.5\r\n                   L512,209.1c0,0,0-5.3,0-8.5H119.5z\" />\r\n                    <path class=\"st0\" d=\"M108.6,183.5h343.6h8.5V130c0-12.9-10.5-23.3-23.3-23.3H226.3l-42.7-59.7H23.3C10.5,46.9,0,57.4,0,70.2v356.7\r\n                   l87.7-228C90.1,190.1,98.8,183.5,108.6,183.5z\" />\r\n                  </g>\r\n                </svg>\r\n              </div>\r\n              <div class=\"for-inline\">{{folder.name}}</div>\r\n            </div>\r\n\r\n            <button id=\"openRenameFolderModalButton\" hidden=\"true\" data-toggle=\"modal\" data-target=\"#renameFolderModal\">Переименовать</button>\r\n            <button id=\"openAddTagFolderModalButton\" hidden=\"true\" data-toggle=\"modal\" data-target=\"#addTagFolderModal\">Добавить тег</button>\r\n            <button id=\"openDeleteFolderModalButton\" hidden=\"true\" data-toggle=\"modal\" data-target=\"#deleteFolderModal\">Удалить папку</button>\r\n            <context-menu #static>\r\n              <ng-template contextMenuItem (execute)=\"openRenameFolderModal(folder.folderId)\">\r\n                Переименовать\r\n              </ng-template>\r\n              <ng-template contextMenuItem (execute)=\"openAddTagFolderModal(folder.folderId)\">\r\n                Добавить тег\r\n              </ng-template>\r\n              <ng-template contextMenuItem (execute)=\"callDownloadZIP(folder.folderId)\">\r\n                Скачать ZIP-архив\r\n              </ng-template>\r\n              <ng-template contextMenuItem (execute)=\"openDeleteFolderModal(folder.folderId)\">\r\n                Удалить папку\r\n              </ng-template>\r\n            </context-menu>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div *ngIf=\"files?.length > 0\">\r\n      <div class=\"title-f\">Файлы</div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-3\" *ngFor=\"let file of files\">\r\n          <button class=\"thumbnail\" class=\"folder-grid\" [contextMenu]=\"static\" style=\"padding: 0\">\r\n            <div (click)=\"openImage(file.fileId)\">\r\n              <img *ngIf=\"file.resizedImage\" [src]=\"sanitize(file.resizedImage)\" />\r\n              <div class=\"folder-grid-item\">\r\n                <div class=\"for-inline\">\r\n                  <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                    viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\" class=\"img-folder\">\r\n                    <path class=\"st0\" d=\"M503.2,53H8.8C4,53,0,56.9,0,61.8v388.4c0,4.9,4,8.8,8.8,8.8h494.3c4.9,0,8.8-3.9,8.8-8.8V61.8\r\n                       C512,56.9,508,53,503.2,53z M141.2,150.1c27.1,0,49.2,22.1,49.2,49.2c0,27.1-22.1,49.2-49.2,49.2s-49.2-22.1-49.2-49.2\r\n                       C92.1,172.1,114.1,150.1,141.2,150.1z M465.5,314.9c-3.3,3.6-8.9,3.8-12.5,0.5l-99.4-91.1l-81,88.8l42.4,42.4c3.5,3.5,3.5,9,0,12.5\r\n                       c-3.5,3.5-9,3.5-12.5,0l-90.9-90.9l-144,126.8c-1.7,1.5-3.8,2.2-5.8,2.2c-2.4,0-4.9-1-6.6-3c-3.2-3.7-2.9-9.2,0.8-12.5l150.2-132.3\r\n                       c3.5-3.1,8.8-2.9,12.1,0.4l41.9,41.9l86.5-94.7c1.6-1.7,3.8-2.8,6.1-2.9c2.3-0.1,4.6,0.7,6.4,2.3L465,302.5\r\n                       C468.6,305.8,468.8,311.3,465.5,314.9z\" />\r\n                  </svg>\r\n                </div>\r\n                <div class=\"for-inline\">{{file.name}}</div>\r\n              </div>\r\n            </div>\r\n            <button id=\"openRenameFileModalButton\" hidden=\"true\" data-toggle=\"modal\" data-target=\"#renameFileModal\">Переименовать</button>\r\n            <button id=\"openAddTagFileModalButton\" hidden=\"true\" data-toggle=\"modal\" data-target=\"#addTagFileModal\">Добавить тег</button>\r\n            <button id=\"openDeleteFileModalButton\" hidden=\"true\" data-toggle=\"modal\" data-target=\"#deleteFileModal\">Удалить файл</button>\r\n            <context-menu #static>\r\n              <ng-template contextMenuItem (execute)=\"openRenameFileModal(file.fileId)\">\r\n                Переименовать\r\n              </ng-template>\r\n              <ng-template contextMenuItem (execute)=\"openAddTagFileModal(file.fileId)\">\r\n                Добавить тег\r\n              </ng-template>\r\n              <ng-template contextMenuItem (execute)=\"callDownload(file.fileId)\">\r\n                Скачать файл\r\n              </ng-template>\r\n              <ng-template contextMenuItem (execute)=\"openDeleteFileModal(file.fileId)\">\r\n                Удалить файл\r\n              </ng-template>\r\n            </context-menu>\r\n\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div *ngIf=\"!grid\">\r\n    <div *ngIf=\"folders?.length > 0 || files?.length > 0\">\r\n      <div class=\"col-sm-9 just-for-padding\">\r\n        <div class=\"title-f\">Название</div>\r\n      </div>\r\n      <div class=\"col-sm-3\">\r\n        <div class=\"title-f\">Теги</div>\r\n      </div>\r\n      <button class=\"folder-grid col-sm-12 \" *ngFor=\"let folder of folders\">\r\n        <div [contextMenu]=\"static\" (dblclick)=\"moveToSelectedFolder(folder.folderId, folder.name)\">\r\n          <div class=\"col-sm-9 just-for-padding\">\r\n            <div class=\"folder-grid-item\">\r\n              <div class=\"for-inline\">\r\n                <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                  viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\" class=\"img-folder\">\r\n                  <g>\r\n                    <path class=\"st0\" d=\"M119.5,200.5c-2.2,0-4.1,1.5-4.7,3.6L17.1,448v8.5c0,6.3-0.4,8.5,4.8,8.5h381.9c9.9,0,18.6-6.6,20.9-15.5\r\n                       L512,209.1c0,0,0-5.3,0-8.5H119.5z\" />\r\n                    <path class=\"st0\" d=\"M108.6,183.5h343.6h8.5V130c0-12.9-10.5-23.3-23.3-23.3H226.3l-42.7-59.7H23.3C10.5,46.9,0,57.4,0,70.2v356.7\r\n                       l87.7-228C90.1,190.1,98.8,183.5,108.6,183.5z\" />\r\n                  </g>\r\n                </svg>\r\n              </div>\r\n              <div class=\"for-inline\">{{folder.name}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-3\">\r\n            <div class=\"folder-grid-item\">\r\n              <span *ngFor=\"let tagFolder of folder.tagList\">\r\n                #{{tagFolder}}\r\n              </span>\r\n            </div>\r\n          </div>\r\n          <button id=\"openRenameFolderModalButton\" hidden=\"true\" data-toggle=\"modal\" data-target=\"#renameFolderModal\">Переименовать</button>\r\n          <button id=\"openAddTagFolderModalButton\" hidden=\"true\" data-toggle=\"modal\" data-target=\"#addTagFolderModal\">Добавить тег</button>\r\n          <button id=\"openDeleteFolderModalButton\" hidden=\"true\" data-toggle=\"modal\" data-target=\"#deleteFolderModal\">Удалить папку</button>\r\n          <context-menu #static>\r\n            <ng-template contextMenuItem (execute)=\"openRenameFolderModal(folder.folderId)\">\r\n              Переименовать\r\n            </ng-template>\r\n            <ng-template contextMenuItem (execute)=\"openAddTagFolderModal(folder.folderId)\">\r\n              Добавить тег\r\n            </ng-template>\r\n            <ng-template contextMenuItem (execute)=\"callDownloadZIP(folder.folderId)\">\r\n              Скачать ZIP-архив\r\n            </ng-template>\r\n            <ng-template contextMenuItem (execute)=\"openDeleteFolderModal(folder.folderId)\">\r\n              Удалить папку\r\n            </ng-template>\r\n          </context-menu>\r\n        </div>\r\n      </button>\r\n    </div>\r\n\r\n\r\n\r\n    <button class=\"folder-grid col-sm-12 \" *ngFor=\"let file of files\">\r\n      <div [contextMenu]=\"static\">\r\n        <div (click)=\"openImage(file.fileId)\">\r\n          <div class=\"col-sm-9 just-for-padding\">\r\n            <div class=\"folder-grid-item\">\r\n              <div class=\"for-inline\">\r\n                <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                  viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\" class=\"img-folder\">\r\n                  <path class=\"st0\" d=\"M503.2,53H8.8C4,53,0,56.9,0,61.8v388.4c0,4.9,4,8.8,8.8,8.8h494.3c4.9,0,8.8-3.9,8.8-8.8V61.8\r\n                       C512,56.9,508,53,503.2,53z M141.2,150.1c27.1,0,49.2,22.1,49.2,49.2c0,27.1-22.1,49.2-49.2,49.2s-49.2-22.1-49.2-49.2\r\n                       C92.1,172.1,114.1,150.1,141.2,150.1z M465.5,314.9c-3.3,3.6-8.9,3.8-12.5,0.5l-99.4-91.1l-81,88.8l42.4,42.4c3.5,3.5,3.5,9,0,12.5\r\n                       c-3.5,3.5-9,3.5-12.5,0l-90.9-90.9l-144,126.8c-1.7,1.5-3.8,2.2-5.8,2.2c-2.4,0-4.9-1-6.6-3c-3.2-3.7-2.9-9.2,0.8-12.5l150.2-132.3\r\n                       c3.5-3.1,8.8-2.9,12.1,0.4l41.9,41.9l86.5-94.7c1.6-1.7,3.8-2.8,6.1-2.9c2.3-0.1,4.6,0.7,6.4,2.3L465,302.5\r\n                       C468.6,305.8,468.8,311.3,465.5,314.9z\" />\r\n                </svg>\r\n              </div>\r\n              <div class=\"for-inline\">{{file.name}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-3\">\r\n            <div class=\"folder-grid-item\">\r\n              <span *ngFor=\"let tagFile of file.tagList\">\r\n                #{{tagFile}}\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <button id=\"openRenameFileModalButton\" hidden=\"true\" data-toggle=\"modal\" data-target=\"#renameFileModal\">Переименовать</button>\r\n        <button id=\"openAddTagFileModalButton\" hidden=\"true\" data-toggle=\"modal\" data-target=\"#addTagFileModal\">Добавить тег</button>\r\n        <button id=\"openDeleteFileModalButton\" hidden=\"true\" data-toggle=\"modal\" data-target=\"#deleteFileModal\">Удалить файл</button>\r\n        <context-menu #static>\r\n          <ng-template contextMenuItem (execute)=\"openRenameFileModal(file.fileId)\">\r\n            Переименовать\r\n          </ng-template>\r\n          <ng-template contextMenuItem (execute)=\"openAddTagFileModal(file.fileId)\">\r\n            Добавить тег\r\n          </ng-template>\r\n          <ng-template contextMenuItem (execute)=\"callDownload(file.fileId)\">\r\n            Скачать файл\r\n          </ng-template>\r\n          <ng-template contextMenuItem (execute)=\"openDeleteFileModal(file.fileId)\">\r\n            Удалить файл\r\n          </ng-template>\r\n        </context-menu>\r\n      </div>\r\n    </button>\r\n  </div>\r\n</div>\r\n<div class=\"col-sm-2\" *ngIf=\"folders?.length > 0 || files?.length > 0\">\r\n  <div class=\"button-group-right\">\r\n    <div>\r\n      <button class=\"button-color\" data-toggle=\"modal\" data-target=\"#uploadFileModal\">Загрузить файл</button>\r\n    </div>\r\n    <div>\r\n      <button class=\"button\" data-toggle=\"modal\" data-target=\"#createFolderModal\">Создать папку</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"createFolderModal\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content custom-modal\">\r\n      <div class=\"modal-header custom-header\">\r\n        <h4 class=\"modal-title\">Создание папки</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form name=\"form\" (ngSubmit)=\"formCreate.form.valid && createfolder(formCreate)\" #formCreate=\"ngForm\" novalidate>\r\n          <div class=\"form-group\">\r\n            <label for=\"foldername\"></label>\r\n            <input type=\"text\" class=\"form-control form-control-on-add-folder\" name=\"foldername\" placeholder=\"Имя папки\" [(ngModel)]=\"model.foldername\"\r\n              #foldername=\"ngModel\" required maxlength=\"50\" />\r\n            <div *ngIf=\"formCreate.submitted && !foldername.valid\" class=\"alerts\">\r\n              Имя папки необходимо.\r\n            </div>\r\n            <!-- <div *ngIf=\"f.submitted && !name.valid\" class=\"help-block\">Имя пользователя необходимо</div> -->\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <button class=\"button-transparent\" data-dismiss=\"modal\" #closeCreateFolderModal>Отмена</button>\r\n            <button class=\"button-color\">Готово</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"uploadFileModal\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content custom-modal\">\r\n      <div class=\"modal-header custom-header\">\r\n        <h4 class=\"modal-title\">Загрузка файлов\r\n          <span class=\"img-tag\">\r\n            <img src=\"assets\\icons\\reload.svg\" class=\"img-tag pull-right\" [class.rotating-animation-in-upload]=\"this.loading == true\">\r\n          </span>\r\n        </h4>\r\n      </div>\r\n      <div class=\"modal-body modal-body-on-upload-files\">\r\n        <div class=\"file_upload\">\r\n          <button type=\"button\">Выбрать</button>\r\n\r\n          <input type=\"file\" #inputfiles (change)=\"onChange(inputfiles.files)\" placeholder=\"Upload file\" accept=\".jpg,.png,.avi,.mov,.mkv\"\r\n            multiple>\r\n        </div>\r\n        <table class=\"custom-table\">\r\n\r\n          <tr *ngFor=\"let f of uploadFiles; let i = index\">\r\n            <td>\r\n              <img src=\"assets\\icons\\success.svg\" width=\"20\" height=\"20\" *ngIf=\"checkIfValid(f).length == 0\">\r\n              <img src=\"assets\\icons\\minus.svg\" width=\"20\" height=\"20\" *ngIf=\"checkIfValid(f).length > 0\">\r\n            </td>\r\n            <td>\r\n              <img src=\"assets\\icons\\picture.svg\" width=\"20\" height=\"20\" *ngIf=\"checkIfImage(f.name)\">\r\n              <img src=\"assets\\icons\\video-player.svg\" width=\"20\" height=\"20\" *ngIf=\"!checkIfImage(f.name)\">\r\n            </td>\r\n            <td class=\"name-file-in-table\">{{f.name}}\r\n              <div class=\"errors-in-upload\">{{checkIfValid(f)}}</div>\r\n            </td>\r\n            <td>\r\n              <form name=\"form\" #frm=\"ngForm\" novalidate>\r\n                <div>\r\n                  <input type=\"text\" class=\"form-control-on-upload-file\" name=\"f.name-{{i}}\" placeholder=\"+Добавить тег\" [(ngModel)]=\"f.hashtag\"\r\n                    #hashtag=\"ngModel\" />\r\n                  <div *ngIf=\"hashtag.errors && (hashtag.dirty && hashtag.touched)\" class=\"alerts\">\r\n                    <br>\r\n                    <div [hidden]=\"!hashtag.errors\">\r\n                      Введите корректный тег.\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </td>\r\n\r\n          </tr>\r\n\r\n        </table>\r\n        <div class=\"right-for-upload\">\r\n          <button class=\"button-transparent\" data-dismiss=\"modal\" #closeUploadFileModal>Отмена</button>\r\n          <button class=\"button-color\" (click)=\"uploadFile()\">Готово</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"renameFolderModal\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content custom-modal\">\r\n      <div class=\"modal-header custom-header\">\r\n        <h4 class=\"modal-title\">Переименовать папку</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form name=\"formrenamev\" (ngSubmit)=\"formrename.valid && renamefolder(formrename)\" #formrename=\"ngForm\" novalidate>\r\n          <div class=\"form-group\">\r\n            <label for=\"folderrename\"></label>\r\n            <input type=\"text\" class=\"form-control form-control-on-add-folder\" name=\"folderrename\" placeholder=\"Имя папки\" [(ngModel)]=\"folderrenamem.name\"\r\n              #folderrename=\"ngModel\" required maxlength=\"50\" />\r\n            <div *ngIf=\"formrename.submitted && !folderrename.valid\" class=\"alerts\">\r\n              Имя папки необходимо.\r\n            </div>\r\n            <!-- <div *ngIf=\"f.submitted && !name.valid\" class=\"help-block\">Имя пользователя необходимо</div> -->\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <button class=\"button-transparent\" data-dismiss=\"modal\" #closeRenameFolderModal>Отмена</button>\r\n            <button class=\"button-color\">Готово</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"addTagFolderModal\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content custom-modal\">\r\n      <div class=\"modal-header custom-header\">\r\n        <h4 class=\"modal-title\">Добавить тег\r\n          <span class=\"img-tag\">\r\n            <img src=\"assets\\icons\\tag-black-shape.svg\" class=\"img-tag pull-right\">\r\n          </span>\r\n        </h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n        <form name=\"formAddTags\" (ngSubmit)=\"formAT.valid && addTags(formAT)\" #formAT=\"ngForm\" novalidate>\r\n          <div class=\"form-group\">\r\n            <label for=\"tags\"></label>\r\n            <textarea cols=\"40\" rows=\"5\" class=\"form-control huge-input\" [(ngModel)]=\"model.tags\" name=\"tags\" id=\"tags\" #tags=\"ngModel\"\r\n              required></textarea>\r\n\r\n            <div *ngIf=\"formAT.submitted && !tags.valid\" class=\"alerts\">\r\n              Теги необходимы.\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group right\">\r\n            <div [hidden]=\"true\">\r\n              <button class=\"button-transparent\" data-dismiss=\"modal\" #closeAddTagFolderModal>Отмена</button>\r\n            </div>\r\n            <span class=\"max-tag-text pull-left\">Максимальное\r\n              <br>количество тегов - 200</span>\r\n            <button class=\"button-color\">Добавить</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"deleteFolderModal\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content custom-modal\">\r\n      <div class=\"modal-body\" padding=\"30\">\r\n        <div class=\"text-deleted\">Вы уверенны, что хотите удалить эту папку?</div>\r\n        <div class=\"form-group\">\r\n          <button class=\"button-color\" data-dismiss=\"modal\" #closeDeleteFolderModal>Ой, нет!</button>\r\n          <button class=\"button-transparent\" (click)=\"deleteFolder()\">Да, удалить</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- files -->\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"renameFileModal\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content custom-modal\">\r\n      <div class=\"modal-header custom-header\">\r\n        <h4 class=\"modal-title\">Переименовать файл</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form name=\"formrenamev\" (ngSubmit)=\"formrenameFile.valid && renameFile(formrenameFile)\" #formrenameFile=\"ngForm\" novalidate>\r\n          <div class=\"form-group\" [ngClass]=\"{ 'has-error': formrenameFile.submitted && !formrenameFile.valid }\">\r\n            <label for=\"folderrename\"></label>\r\n            <input type=\"text\" class=\"form-control form-control-on-add-folder\" name=\"renameFile\" placeholder=\"Имя файла\" [(ngModel)]=\"model.renameFile\"\r\n              #folderrename=\"ngModel\" required maxlength=\"47\" />\r\n            <div *ngIf=\"formrenameFile.submitted && !renameFile.valid\" class=\"alerts\">\r\n              Имя файла необходимо.\r\n            </div>\r\n            <!-- <div *ngIf=\"f.submitted && !name.valid\" class=\"help-block\">Имя пользователя необходимо</div> -->\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <button class=\"button-transparent\" data-dismiss=\"modal\" #closeRenameFileModal>Отмена</button>\r\n            <button class=\"button-color\">Готово</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"addTagFileModal\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content custom-modal\">\r\n      <div class=\"modal-header custom-header\">\r\n        <h4 class=\"modal-title\">Добавить тег\r\n          <span class=\"img-tag\">\r\n            <img src=\"assets\\icons\\tag-black-shape.svg\" class=\"img-tag pull-right\">\r\n          </span>\r\n        </h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n        <form name=\"form\" (ngSubmit)=\"f.form.valid && addTagsFile(f)\" #f=\"ngForm\" novalidate>\r\n          <div class=\"form-group\">\r\n            <label for=\"tags\"></label>\r\n            <textarea cols=\"40\" rows=\"5\" class=\"form-control huge-input\" [(ngModel)]=\"model.tags\" name=\"tags\" id=\"tags\" #tags=\"ngModel\"\r\n              required></textarea>\r\n\r\n            <div *ngIf=\"f.submitted && !tags.valid\" class=\"alerts\">Теги необходимы</div>\r\n          </div>\r\n          <div class=\"form-group right\">\r\n            <div [hidden]=\"true\">\r\n              <button class=\"button-transparent\" data-dismiss=\"modal\" #closeAddTagFileModal>Отмена</button>\r\n            </div>\r\n            <span class=\"max-tag-text pull-left\">Максимальное\r\n              <br>количество тегов - 200</span>\r\n            <button class=\"button-color\">Добавить</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"deleteFileModal\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content custom-modal\">\r\n      <div class=\"modal-body\" padding=\"30\">\r\n        <div class=\"text-deleted\">Вы уверенны, что хотите удалить этот файл?</div>\r\n        <div class=\"form-group\">\r\n          <button class=\"button-color\" data-dismiss=\"modal\" #closeDeleteFileModal>Ой, нет!</button>\r\n          <button class=\"button-transparent\" (click)=\"deleteFile()\">Да, удалить</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<simple-notifications [options]=\"options\"></simple-notifications>\r\n\r\n<div *ngIf=\"showImage\" class=\"carousel\" role=\"dialog\">\r\n  <div class=\"right-side\">\r\n    <div (click)=\"this.showImage = false; this.srccarouselc='assets\\\\icons\\\\cancel.svg'\" class=\"cancel-area\" (mouseenter)=\"mouse('srccarouselc', 'assets\\\\icons\\\\cancel-hover.svg')\"\r\n      (mouseleave)=\"mouse('srccarouselc', 'assets\\\\icons\\\\cancel.svg')\">\r\n      <img [src]=\"this.srccarouselc\" class=\"cancel-button\">\r\n    </div>\r\n    <div *ngIf=\"this.files[(this.getIfromId(this.fileToShow.fileId)*1 + 1)]\" class=\"navigation-right-area\" (click)=\"openImage(this.files[(this.getIfromId(this.fileToShow.fileId)*1 + 1)].fileId)\"\r\n      (mouseenter)=\"mouse('srccarouselr', 'assets\\\\icons\\\\next-hover.svg')\" (mouseleave)=\"mouse('srccarouselr', 'assets\\\\icons\\\\next.svg')\">\r\n      <img [src]=\"this.srccarouselr\" class=\"right-button\">\r\n    </div>\r\n  </div>\r\n  <div>\r\n\r\n    <div *ngIf=\"this.files[(this.getIfromId(this.fileToShow.fileId) - 1)]; else placeForLeft\" (click)=\"openImage(this.files[(this.getIfromId(this.fileToShow.fileId) - 1)].fileId)\"\r\n      (mouseenter)=\"mouse('srccarousell', 'assets\\\\icons\\\\next-hover.svg')\" (mouseleave)=\"mouse('srccarousell', 'assets\\\\icons\\\\next.svg')\"\r\n      class=\"navigation-left-area\">\r\n      <img [src]=\"this.srccarousell\" class=\"left-button rotateimg180\">\r\n    </div>\r\n    <ng-template #placeForLeft>\r\n      <div class=\"navigation-left-area\"></div>\r\n    </ng-template>\r\n  </div>\r\n\r\n  <div class=\"middle\">\r\n    <div class=\"whiteblock\">\r\n      <span class=\"modal-title pull-left\">{{this.fileToShow.name}}\r\n        <br>{{this.fileToShow.size | bytes}}</span>\r\n      <button class=\"button-color pull-right\" (click)=\"callDownload(this.fileToShow.fileId)\">Скачать</button>\r\n      <div class=\"image-container\">\r\n        <img [src]=\"this.sanitize(URL)\" [class.rotating-animation]=\"this.URL == 'assets\\\\icons\\\\reload.svg'\">\r\n      </div>\r\n      <div class=\"carousel-tags\">\r\n        <span *ngFor=\"let tag of this.fileToShow.tagList\">\r\n          #{{tag}}\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/_components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_service__ = __webpack_require__("../../../../../src/app/_components/home/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_sortType__ = __webpack_require__("../../../../../src/app/_components/menu/sortType.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_contextmenu__ = __webpack_require__("../../../../ngx-contextmenu/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomeComponent = (function () {
    function HomeComponent(homeService, router, route, notificationsService, sanitizer) {
        this.homeService = homeService;
        this.router = router;
        this.route = route;
        this.notificationsService = notificationsService;
        this.sanitizer = sanitizer;
        this.model = {};
        this.folders = [];
        this.files = [];
        this.folderrenamem = {};
        this.options = {
            position: ["bottom", "right"],
            timeOut: 3000,
            showProgressBar: true,
            pauseOnHover: true,
            clickToClose: true,
            clickIconToClose: true,
            lastOnBottom: true,
            maxLength: 500
        };
        this.SortType = __WEBPACK_IMPORTED_MODULE_3__menu_sortType__["a" /* SortType */];
        this.showImage = false;
        this.srccarousell = "assets\\icons\\next.svg";
        this.srccarouselr = "assets\\icons\\next.svg";
        this.srccarouselc = "assets\\icons\\cancel.svg";
        this.URL = "assets\\icons\\reload.svg";
        this.loading = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loadRootFolders();
        this.loadRootFiles();
        if (JSON.parse(localStorage.getItem('grid')) === null) {
            this.grid = true;
        }
        else {
            this.grid = JSON.parse(localStorage.getItem('grid'));
        }
    };
    //initial
    HomeComponent.prototype.loadRootFolders = function () {
        var _this = this;
        this.homeService.loadRootFolders().subscribe(function (data) {
            if (!data.success && data.message) {
                console.log(data.message);
                _this.pushErrorNotification('Загрузка папок прошла неуспешно. ' + data.message);
            }
            else {
                console.log('Loading root folders successfull');
            }
            _this.folders = data;
        }, function (error) {
            //show info about error
            _this.pushErrorNotification('Загрузка папок прошла неуспешно');
            console.log('Loading root folders unsuccessfull.');
        });
    };
    HomeComponent.prototype.loadRootFiles = function () {
        var _this = this;
        this.homeService.loadRootFiles().subscribe(function (data) {
            if (!data.success && data.message) {
                console.log(data.message);
                _this.pushErrorNotification('Загрузка файлов прошла неуспешно. ' + data.message);
            }
            else {
                console.log('Loading root files successfull');
                _this.files = data;
                for (var _a = 0, _b = _this.files; _a < _b.length; _a++) {
                    var file = _b[_a];
                    if (_this.checkIfJpg(file.name) == true) {
                        file.resizedImage = 'data:image/jpg;base64,' + file.resizedImage;
                    }
                    else {
                        file.resizedImage = 'data:image/png;base64,' + file.resizedImage;
                    }
                }
            }
        }, function (error) {
            //show info about error
            console.log('Loading root files unsuccessfull');
            _this.pushErrorNotification('Загрузка файлов прошла неуспешно.');
        });
    };
    //menu
    HomeComponent.prototype.createfolder = function (form) {
        var _this = this;
        this.homeService.createfolder(this.model.foldername, null)
            .subscribe(function (data) {
            if (!data.success && data.message) {
                console.log(data.message);
                _this.pushErrorNotification('Создание папки прошло неуспешно. ' + data.message);
            }
            else {
                console.log('Creating folder successfull', data);
                _this.pushSuccessNotification('Создание папки прошло успешно.');
            }
            _this.closeCreateFolderModal.nativeElement.click();
            _this.loadRootFolders();
            form.resetForm();
        }, function (error) {
            console.log('Cant create folder', error);
            _this.closeCreateFolderModal.nativeElement.click();
            _this.pushErrorNotification('Создание папки прошло неуспешно.');
            form.resetForm();
        });
    };
    HomeComponent.prototype.uploadFile = function (form) {
        var _this = this;
        var fi = this.inputfiles.nativeElement;
        for (var _i = 0; _i < fi.files.length; _i++) {
            this.loading = true;
            if (this.checkIfValid(fi.files[_i]) == "") {
                var formData = new FormData();
                formData.append('FileContent', fi.files[_i]);
                formData.append('CreationDate', fi.files[_i].lastModifiedDate.toUTCString());
                formData.append('ParentFolderId', null);
                formData.append('Tags', this.uploadFiles[_i].hashtag ? this.uploadFiles[_i].hashtag : "");
                this.homeService.uploadFile(formData)
                    .subscribe(function (data) {
                    _this.loading = false;
                    if (!data.success && data.message) {
                        console.log(data.message);
                        _this.pushErrorNotification('Загрузка файла ' + data.fileName + ' прошла неуспешно. ' + data.message);
                    }
                    else {
                        console.log('upload file success');
                        _this.pushSuccessNotification('Загрузка файла ' + data.fileName + ' прошла успешно.');
                    }
                    _this.closeUploadFileModal.nativeElement.click();
                    _this.loadRootFiles();
                }, function (error) {
                    _this.loading = false;
                    console.log('Cant upload file', error);
                    _this.closeUploadFileModal.nativeElement.click();
                    _this.pushErrorNotification('Загрузка файла прошла неуспешно.');
                });
            }
        }
    };
    //folders
    HomeComponent.prototype.renamefolder = function (form) {
        var _this = this;
        var folderId = this.selectedObjectId;
        this.homeService.renameFolder(this.folderrenamem.name, folderId)
            .subscribe(function (data) {
            if (!data.success && data.message) {
                console.log(data.message);
                _this.pushErrorNotification('Переименование папки прошло неуспешно. ' + data.message);
            }
            else {
                console.log('Renaming folder successfull for ', folderId);
                _this.pushSuccessNotification('Переименование папки прошло успешно.');
            }
            _this.closeRenameFolderModal.nativeElement.click();
            _this.loadRootFolders();
            form.resetForm();
        }, function (error) {
            _this.closeRenameFolderModal.nativeElement.click();
            console.log('Cant rename folderfor ', folderId);
            _this.pushErrorNotification('Переименование папки прошло неуспешно.');
            form.resetForm();
        });
    };
    HomeComponent.prototype.deleteFolder = function () {
        var _this = this;
        var folderId = this.selectedObjectId;
        this.homeService.deleteFolder(folderId)
            .subscribe(function (data) {
            if (!data.success && data.message) {
                console.log(data.message);
                _this.pushErrorNotification('Удаление папки прошло неуспешно. ' + data.message);
            }
            else {
                console.log('Delete folder successfull');
                _this.pushSuccessNotification('Удаление папки прошло успешно.');
            }
            _this.closeDeleteFolderModal.nativeElement.click();
            _this.loadRootFolders();
        }, function (error) {
            _this.closeDeleteFolderModal.nativeElement.click();
            console.log('Cant delete folder');
            _this.pushErrorNotification('Удаление папки прошло неуспешно.');
        });
    };
    HomeComponent.prototype.addTags = function (form) {
        var _this = this;
        var folderId = this.selectedObjectId;
        this.homeService.addTags(folderId, this.model.tags)
            .subscribe(function (data) {
            if (!data.success && data.message) {
                console.log(data.message);
                _this.pushErrorNotification('Добавление тегов прошло неуспешно. ' + data.message);
            }
            else {
                console.log('Add tags successfull');
                _this.pushSuccessNotification('Добавление тегов прошло успешно.');
            }
            _this.closeAddTagFolderModal.nativeElement.click();
            _this.loadRootFolders();
            form.resetForm();
        }, function (error) {
            _this.closeAddTagFolderModal.nativeElement.click();
            console.log('Cant add tags');
            _this.pushErrorNotification('Добавление тегов прошло неуспешно.');
            form.resetForm();
        });
    };
    //files
    HomeComponent.prototype.renameFile = function (form) {
        var _this = this;
        var fileId = this.selectedObjectId;
        console.log(this.model.renameFile, fileId);
        this.homeService.renameFile(this.model.renameFile, fileId)
            .subscribe(function (data) {
            if (!data.success && data.message) {
                console.log(data.message);
                _this.pushErrorNotification('Переименование файла прошло неуспешно. ' + data.message);
            }
            else {
                console.log('Renaming file successfull for ', fileId);
                _this.pushSuccessNotification('Переименование файла прошло успешно.');
            }
            _this.closeRenameFileModal.nativeElement.click();
            _this.loadRootFiles();
            form.resetForm();
        }, function (error) {
            _this.closeRenameFileModal.nativeElement.click();
            console.log('Cant rename file for ', fileId);
            _this.pushErrorNotification('Переименование файла прошло неуспешно.');
            form.resetForm();
        });
    };
    HomeComponent.prototype.deleteFile = function () {
        var _this = this;
        var fileId = this.selectedObjectId;
        this.homeService.deleteFile(fileId)
            .subscribe(function (data) {
            if (!data.success && data.message) {
                console.log(data.message);
                _this.pushErrorNotification('Удаление файла прошло неуспешно. ' + data.message);
            }
            else {
                console.log('Delete file successfull');
                _this.pushSuccessNotification('Удаление файла прошло успешно.');
            }
            _this.closeDeleteFileModal.nativeElement.click();
            _this.loadRootFiles();
        }, function (error) {
            _this.closeDeleteFileModal.nativeElement.click();
            console.log('Cant delete file');
            _this.pushErrorNotification('Удаление файла прошло неуспешно.');
        });
    };
    HomeComponent.prototype.addTagsFile = function (form) {
        var _this = this;
        var fileId = this.selectedObjectId;
        this.homeService.addTagsFile(fileId, this.model.tags)
            .subscribe(function (data) {
            if (!data.success && data.message) {
                console.log(data.message);
                _this.pushErrorNotification('Добавление тегов прошло неуспешно. ' + data.message);
            }
            else {
                console.log('Add tags successfull');
                _this.pushSuccessNotification('Добавление тегов прошло успешно.');
            }
            _this.closeAddTagFileModal.nativeElement.click();
            _this.loadRootFiles();
            form.resetForm();
        }, function (error) {
            _this.closeAddTagFileModal.nativeElement.click();
            console.log('Cant add tags');
            _this.pushErrorNotification('Добавление тегов прошло неуспешно.');
            form.resetForm();
        });
    };
    //folders
    HomeComponent.prototype.openRenameFolderModal = function (folderId) {
        document.getElementById("openRenameFolderModalButton").click();
        console.log('modal for rename open ', folderId);
        this.selectedObjectId = folderId;
    };
    HomeComponent.prototype.openAddTagFolderModal = function (folderId) {
        document.getElementById("openAddTagFolderModalButton").click();
        console.log('modal for add tag open ', folderId);
        this.selectedObjectId = folderId;
    };
    HomeComponent.prototype.callDownloadZIP = function (folderId) {
        var _this = this;
        this.selectedObjectId = folderId;
        this.homeService.downloadZIP(folderId)
            .subscribe(function (data) {
            console.log('Download zip successfull');
            var fileExtension = data.type.substring(data.type.lastIndexOf("/") + 1, data.type.length);
            var filename = 'file.' + fileExtension;
            Object(__WEBPACK_IMPORTED_MODULE_6_file_saver__["saveAs"])(data, _this.folders[_this.getIfromId(folderId)].name + '.' + fileExtension);
        }, function (error) {
            console.log('Cant download');
            _this.pushErrorNotification('Скачивание zip прошло неуспешно.');
        });
    };
    HomeComponent.prototype.openDeleteFolderModal = function (folderId) {
        document.getElementById("openDeleteFolderModalButton").click();
        console.log('modal for deleting open ', folderId);
        this.selectedObjectId = folderId;
    };
    //files
    HomeComponent.prototype.openRenameFileModal = function (fileId) {
        document.getElementById("openRenameFileModalButton").click();
        console.log('modal for rename open ', fileId);
        this.selectedObjectId = fileId;
    };
    HomeComponent.prototype.openAddTagFileModal = function (fileId) {
        document.getElementById("openAddTagFileModalButton").click();
        console.log('modal for add tag open ', fileId);
        this.selectedObjectId = fileId;
    };
    HomeComponent.prototype.callDownload = function (fileId) {
        var _this = this;
        this.selectedObjectId = fileId;
        this.homeService.downloadFile(fileId)
            .subscribe(function (data) {
            console.log('Download successfull');
            var fileExtension = data.type.substring(data.type.lastIndexOf("/") + 1, data.type.length);
            var filename = 'file.' + fileExtension;
            Object(__WEBPACK_IMPORTED_MODULE_6_file_saver__["saveAs"])(data, _this.files[_this.getIfromId(fileId)].name);
        }, function (error) {
            console.log('Cant download');
            _this.pushErrorNotification('Скачивание файла прошло неуспешно.');
        });
    };
    HomeComponent.prototype.openDeleteFileModal = function (fileId) {
        document.getElementById("openDeleteFileModalButton").click();
        console.log('modal for deleting open ', fileId);
        this.selectedObjectId = fileId;
    };
    HomeComponent.prototype.search = function (searchModel) {
        var _this = this;
        this.homeService.search(searchModel.text, searchModel.fileTypeSearch)
            .subscribe(function (data) {
            if (!data.success && data.message) {
                console.log(data.message);
            }
            else {
                console.log('seacrh successfull');
            }
            _this.files = data;
            _this.folders = [];
        }, function (error) {
            _this.closeAddTagFileModal.nativeElement.click();
            console.log('Cant search');
        });
    };
    HomeComponent.prototype.toggleGrid = function (res) {
        this.grid = res;
    };
    HomeComponent.prototype.moveToSelectedFolder = function (folderId, folderName) {
        this.router.navigate(['', folderId]);
    };
    HomeComponent.prototype.onChange = function (fileInput) {
        this.uploadFiles = fileInput;
    };
    HomeComponent.prototype.checkIfImage = function (name) {
        var fileExtension = "";
        if (name.lastIndexOf(".") > 0) {
            fileExtension = name.substring(name.lastIndexOf(".") + 1, name.length);
        }
        if (fileExtension.toLowerCase() == "jpg" || "png") {
            return true;
        }
        else {
            return false;
        }
    };
    HomeComponent.prototype.checkIfValid = function (file) {
        var fileExtension = "";
        if (file.name.lastIndexOf(".") > 0) {
            fileExtension = file.name.substring(file.name.lastIndexOf(".") + 1, file.name.length);
        }
        if (!(fileExtension.toLowerCase() == "jpg" || "png" || "mov" || "avi" || "mkv")) {
            return "Тип файла не поддерживается";
        }
        else if (!(file.size < 50000000)) {
            return "Размер файла превышает 50MB";
        }
        else if (!(file.name.length < 50)) {
            return "Имя файла больше 50 символов";
        }
        else {
            return "";
        }
    };
    HomeComponent.prototype.checkIfJpg = function (name) {
        var fileExtension = "";
        if (name.lastIndexOf(".") > 0) {
            fileExtension = name.substring(name.lastIndexOf(".") + 1, name.length);
        }
        if (fileExtension.toLowerCase() == "jpg") {
            return true;
        }
        if (fileExtension.toLowerCase() == "png") {
            return false;
        }
        else {
            return false;
        }
    };
    HomeComponent.prototype.pushSuccessNotification = function (message, options) {
        this.notificationsService.success('Ура!', message, options);
    };
    HomeComponent.prototype.pushErrorNotification = function (message, options) {
        this.notificationsService.error('Упс!', message, options);
    };
    HomeComponent.prototype.sort = function (sortType) {
        var swapped = true;
        var z = 0;
        while (swapped) {
            swapped = false;
            for (var _i = 0; _i < this.files.length - 1 - z; _i++) {
                if (this.files[_i][__WEBPACK_IMPORTED_MODULE_3__menu_sortType__["a" /* SortType */][sortType]] > this.files[_i + 1][__WEBPACK_IMPORTED_MODULE_3__menu_sortType__["a" /* SortType */][sortType]]) {
                    var buf = this.files[_i];
                    this.files[_i] = this.files[_i + 1];
                    this.files[_i + 1] = buf;
                    swapped = true;
                }
            }
            z++;
        }
    };
    HomeComponent.prototype.openImage = function (fileId) {
        var _this = this;
        this.showImage = true;
        this.fileToShow = this.files[this.getIfromId(fileId)];
        this.mouse('srccarouselr', 'assets\\icons\\next.svg');
        this.mouse('srccarousell', 'assets\\icons\\next.svg');
        this.URL = "assets\\icons\\reload.svg";
        this.homeService.downloadFile(fileId)
            .subscribe(function (data) {
            _this.createImageFromBlob(data);
        });
    };
    HomeComponent.prototype.createImageFromBlob = function (image) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            _this.URL = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    HomeComponent.prototype.sanitize = function (url) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    };
    HomeComponent.prototype.mouse = function (srccarousel, src) {
        this[srccarousel] = src;
    };
    HomeComponent.prototype.getIfromId = function (id) {
        for (var i in this.files) {
            if (this.files[i].fileId === id) {
                return i;
            }
        }
        for (var i in this.folders) {
            if (this.folders[i].folderId === id) {
                return i;
            }
        }
    };
    return HomeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeCreateFolderModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], HomeComponent.prototype, "closeCreateFolderModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeUploadFileModal'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], HomeComponent.prototype, "closeUploadFileModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeRenameFolderModal'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object)
], HomeComponent.prototype, "closeRenameFolderModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeAddTagFolderModal'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object)
], HomeComponent.prototype, "closeAddTagFolderModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeDeleteFolderModal'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _e || Object)
], HomeComponent.prototype, "closeDeleteFolderModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeRenameFileModal'),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _f || Object)
], HomeComponent.prototype, "closeRenameFileModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeAddTagFileModal'),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _g || Object)
], HomeComponent.prototype, "closeAddTagFileModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeDeleteFileModal'),
    __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _h || Object)
], HomeComponent.prototype, "closeDeleteFileModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("inputfiles"),
    __metadata("design:type", Object)
], HomeComponent.prototype, "inputfiles", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_ngx_contextmenu__["a" /* ContextMenuComponent */]),
    __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_contextmenu__["a" /* ContextMenuComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_contextmenu__["a" /* ContextMenuComponent */]) === "function" && _j || Object)
], HomeComponent.prototype, "basicMenu", void 0);
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/_components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2__home_service__["a" /* HomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__home_service__["a" /* HomeService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["NotificationsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["NotificationsService"]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["DomSanitizer"]) === "function" && _p || Object])
], HomeComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/_components/home/home.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeService = (function () {
    function HomeService(http) {
        this.http = http;
    }
    HomeService.prototype.search = function (textToSearh, typeFileSearch) {
        if (typeFileSearch) {
            return this.http.post('/api/folders/search-name', textToSearh, this.jwt()).map(this.extractData);
        }
        else {
            return this.http.post('/api/folders/search-tag', textToSearh, this.jwt()).map(this.extractData);
        }
    };
    //menu
    HomeService.prototype.createfolder = function (folderName, parentFolderId) {
        var folderNameWithParentFolderId = {
            name: folderName,
            parentObjectId: parentFolderId,
        };
        return this.http.post('/api/folders/add-folder', folderNameWithParentFolderId, this.jwt()).map(this.extractData);
    };
    HomeService.prototype.uploadFile = function (input) {
        return this.http.post('/api/files/upload-request', input, this.jwt()).map(this.extractData);
    };
    //folders
    HomeService.prototype.renameFolder = function (folderName, FolderId) {
        var updatedObject = {
            objectId: FolderId,
            updatedName: folderName,
        };
        return this.http.post('/api/folders/rename-folder', updatedObject, this.jwt()).map(this.extractData);
    };
    HomeService.prototype.addTags = function (folderId, tags) {
        var tagsInfo = {
            text: tags,
            objectId: folderId,
        };
        return this.http.post('/api/folders/add-folder-tag', tagsInfo, this.jwt()).map(this.extractData);
    };
    HomeService.prototype.deleteFolder = function (selectedId) {
        return this.http.get('/api/folders/delete-folder/' + selectedId, this.jwt()).map(this.extractData);
    };
    //files
    HomeService.prototype.renameFile = function (fileName, FolderId) {
        var updatedObject = {
            objectId: FolderId,
            updatedName: fileName,
        };
        return this.http.post('/api/folders/rename-file', updatedObject, this.jwt()).map(this.extractData);
    };
    HomeService.prototype.deleteFile = function (selectedId) {
        return this.http.get('/api/folders/delete-file/' + selectedId, this.jwt()).map(this.extractData);
    };
    HomeService.prototype.addTagsFile = function (fileId, tags) {
        var tagsInfo = {
            text: tags,
            objectId: fileId,
        };
        return this.http.post('/api/folders/add-file-tag', tagsInfo, this.jwt()).map(this.extractData);
    };
    HomeService.prototype.downloadFile = function (fileId) {
        return this.http.get('/api/files/download-file/' + fileId, this.jwtWithResponceContentType()).map(function (res) {
            return new Blob([res.blob()], {
                type: res.headers.get("Content-Extention")
            });
        });
    };
    HomeService.prototype.downloadZIP = function (folderId) {
        return this.http.get('/api/files/archive-request/' + folderId, this.jwtWithResponceContentType()).map(function (res) {
            return new Blob([res.blob()], {
                type: res.headers.get("Content-Extention")
            });
        });
    };
    //initial requests
    HomeService.prototype.loadRootFolders = function () {
        return this.http.get('api/folders/get-root-folders/', this.jwt()).map(this.extractData);
    };
    HomeService.prototype.loadRootFiles = function () {
        return this.http.get('api/folders/get-root-files/', this.jwt()).map(this.extractData);
    };
    HomeService.prototype.loadFolders = function (id) {
        return this.http.get('api/folders/get-folders/' + id, this.jwt()).map(this.extractData);
    };
    HomeService.prototype.loadFiles = function (id) {
        return this.http.get('api/folders/get-files/' + id, this.jwt()).map(this.extractData);
    };
    HomeService.prototype.loadBreadcrumbs = function (id) {
        return this.http.get('api/folders/get-path-to-root/' + id, this.jwt()).map(this.extractData);
    };
    HomeService.prototype.extractData = function (res) {
        return res.text() ? res.json() : {};
        ;
    };
    HomeService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + currentUser.token });
            headers.append('Accept', 'application/json');
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        }
    };
    HomeService.prototype.jwtWithResponceContentType = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + currentUser.token });
            headers.append('Accept', 'application/json');
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
                responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* ResponseContentType */].Blob,
                headers: headers
            });
        }
    };
    return HomeService;
}());
HomeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], HomeService);

var _a;
//# sourceMappingURL=home.service.js.map

/***/ }),

/***/ "../../../../../src/app/_components/login/authentification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthentificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthentificationService = (function () {
    function AuthentificationService(http) {
        this.http = http;
    }
    AuthentificationService.prototype.login = function (email, password) {
        var userCredentials = {
            email: email,
            password: password
        };
        return this.http.post('/api/users/auth-token', userCredentials)
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var userInfoWithToken = response.json();
            if (userInfoWithToken && userInfoWithToken.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(userInfoWithToken));
            }
            return userInfoWithToken;
        });
    };
    AuthentificationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthentificationService.prototype.addUser = function (name, email, password) {
        var userCredentialsWithName = {
            name: name,
            email: email,
            password: password
        };
        return this.http.post('/api/users/add-user', userCredentialsWithName)
            .map(this.extractData);
    };
    AuthentificationService.prototype.extractData = function (res) {
        return res.text() ? res.json() : {};
        ;
    };
    return AuthentificationService;
}());
AuthentificationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthentificationService);

var _a;
//# sourceMappingURL=authentification.service.js.map

/***/ }),

/***/ "../../../../../src/app/_components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fill { \r\n    min-height: 100vh;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center\r\n}\r\n\r\np.logo {\r\n     text-align: center;\r\n     text-transform: uppercase;\r\n     font-weight: bold;\r\n     font-size: 3.5em;\r\n     letter-spacing: 10px;\r\n     color: #676767;\r\n     font-family: Raleway-Black;\r\n}\r\n\r\np.welcome {\r\n    text-align: center;\r\n    font-size: 1.6em;\r\n    color: #999999;\r\n    font-family: Raleway-SemiBold;\r\n    letter-spacing: 3px;\r\n}\r\n\r\n.title {\r\n    width: 550px; /* Ширина блока */ /* Для Firefox */  \r\n    box-sizing: border-box; /* Ширина блока с полями */\r\n    padding-bottom: 20px;\r\n}\r\n\r\np.login {\r\n    text-align: center;\r\n    font-weight: bold;\r\n    color: #333333;\r\n    font-size: 2.4em;\r\n    font-family: Raleway-Black;\r\n    letter-spacing: 2px;\r\n}\r\n\r\n.textchoose {\r\n    padding-bottom: 40px;\r\n    color: #7a7a7a;\r\n    font-family: Raleway-SemiBold;\r\n    letter-spacing: 2px;\r\n}\r\n\r\np.register {\r\n    text-align: center;\r\n    font-size: 1.4em;\r\n    font-family: Raleway-SemiBold;\r\n    letter-spacing: 2px;\r\n}\r\n\r\n.link {\r\n    text-decoration: none;\r\n    color: #d3346c;\r\n    font-size: 1em;\r\n}\r\n\r\n.whiteblock {\r\n    background-color: #FFFFFF;\r\n    width: 550px; /* Ширина блока */\r\n    height: 700px;\r\n    padding-bottom: 100px; /* Поля */\r\n    padding-right: 95px;\r\n    padding-left: 95px;\r\n    padding-top: 100px;\r\n    margin-top: 10px; /* Отступ сверху */\r\n    border-radius: 5px; /* Для Firefox */  \r\n    box-sizing: border-box; /* Ширина блока с полями */\r\n    box-shadow: 0px 3px 4px 0px #b9b9b9;\r\n}\r\n\r\n.form-control {\r\n     height: 60px !important;\r\n     border: 2px solid #999999 !important;\r\n     border-radius: 4px !important; \r\n     padding-left: 20px !important; \r\n     color: #7a7a7a;\r\n     font-family: Raleway-SemiBold;\r\n     letter-spacing: 1px;\r\n     font-size: 1.2em;\r\n }\r\n\r\n.button {\r\n    background-color: #34d3bb !important;/* Green */\r\n    width: 360px;\r\n    height: 60px;\r\n    color: white;\r\n    padding: 9px 0px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 0px 0px;\r\n    cursor: pointer;\r\n    border-radius: 30px; /* Safari */\r\n    transition-duration: 0.4s;\r\n    border: 2px solid #34d3bb;\r\n    margin-top: 60px;\r\n    font-family: Raleway-SemiBold;\r\n    letter-spacing: 1px;\r\n    font-size: 1.4em;\r\n}\r\n\r\n.button:focus {\r\n    outline:0;\r\n}\r\n\r\n.button:hover {\r\n    background-color: #FFFFFF !important;\r\n    color: #616161;\r\n    border: 2px solid #999999;\r\n}\r\n\r\n.vertical-align {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.form-group{\r\n    margin: 0px;\r\n}\r\n\r\n.alerts {\r\n    padding: 0px;\r\n    margin:  0px;\r\n    color: #d3095f;\r\n    font-family: Raleway-SemiBold;\r\n    letter-spacing: 1px;\r\n    font-size: 1em;\r\n    max-height: 15px;\r\n    position: relative;\r\n    bottom: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container fill vertical-align\">\r\n    <div>\r\n        <div class=\"title\">\r\n            <p class=\"logo\">logo</p>\r\n            <p class=\"welcome\">Добро пожаловать!</p>\r\n        </div>\r\n        <div class=\"whiteblock\">\r\n            <div class=\"textchoose\">\r\n                <p class=\"login\">Войдите в аккаунт</p>\r\n\r\n                <p class=\"register\">или\r\n                    <a [routerLink]=\"['/register']\" class=\"link\">Cоздайте аккаунт</a>\r\n                </p>\r\n            </div>\r\n            <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\r\n                    <label for=\"email\"></label>\r\n                    <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"E-mail\" [(ngModel)]=\"model.email\" #email=\"ngModel\" required\r\n                        email />\r\n\r\n                    <div *ngIf=\"email.errors && (email.dirty && email.touched)\" class=\"alerts\">\r\n                        <br>\r\n                        <div [hidden]=\"!email.errors.required\">\r\n                            Email необходим.\r\n                        </div>\r\n                        <div [hidden]=\"!email.errors.email\">\r\n                            Введите корректный email.\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <!-- <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">E-mail необходим</div> -->\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n                    <label for=\"password\"></label>\r\n                    <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Пароль\" [(ngModel)]=\"model.password\" #password=\"ngModel\"\r\n                        required minlength=\"6\" maxlength=\"50\" />\r\n\r\n                    <div *ngIf=\"password.errors && (password.dirty && password.touched)\" class=\"alerts\">\r\n                        <br>\r\n                        <div [hidden]=\"!password.errors.required\">\r\n                            Пароль необходим.\r\n                        </div>\r\n                        <div [hidden]=\"!password.errors.minlength\">\r\n                            Минимальная длинна пароля 6 символов.\r\n                        </div>\r\n                        <div [hidden]=\"!password.errors.maxlength\">\r\n                            Максимальная длинна пароля 50 символов.\r\n                        </div>\r\n                    </div>\r\n                    <!-- <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Пароль необходим</div> -->\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <button [disabled]=\"loading\" class=\"button\">Войти</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n<simple-notifications [options]=\"options\"></simple-notifications>"

/***/ }),

/***/ "../../../../../src/app/_components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentification_service__ = __webpack_require__("../../../../../src/app/_components/login/authentification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(route, router, authentificationService, notificationsService) {
        this.route = route;
        this.router = router;
        this.authentificationService = authentificationService;
        this.notificationsService = notificationsService;
        this.model = {};
        this.loading = false;
        this.options = {
            position: ["bottom", "right"],
            timeOut: 3000,
            showProgressBar: true,
            pauseOnHover: true,
            clickToClose: true,
            clickIconToClose: true,
            lastOnBottom: true,
            maxLength: 500
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authentificationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authentificationService.login(this.model.email, this.model.password)
            .subscribe(function (data) {
            if (!data.success && data.message) {
                _this.notificationsService.error('Упс!', data.message, _this.options);
                _this.loading = false;
            }
            else {
                console.log('Login succesfull');
                _this.router.navigate([_this.returnUrl]);
            }
        }, function (error) {
            console.log('Login unsuccesfull');
            _this.loading = false;
            _this.notificationsService.error('Упс!', 'Неполадки с сервером.', _this.options);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/_components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__authentification_service__["a" /* AuthentificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__authentification_service__["a" /* AuthentificationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_notifications__["NotificationsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_notifications__["NotificationsService"]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/_components/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-brand\r\n{\r\n    position: absolute;\r\n    width: 100%;\r\n    left: 0;\r\n    text-align: center;\r\n    margin-top: -10px;\r\n    padding: 43px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    font-size: 3.2em;\r\n    letter-spacing: 10px;\r\n    color: #423f41;\r\n    font-family: Raleway-Black;\r\n    border-bottom: 2px solid #f0f1f7;\r\n}\r\n\r\n.img-color-circle {\r\n    background-color:#f0f1f7;\r\n    border-radius: 50%;\r\n    width: 60px;\r\n    height: 60px;\r\n}\r\n\r\n.img-circle{\r\n    padding: 15px;\r\n    width: 60px;\r\n    height: 60px;\r\n}\r\n\r\n.link{\r\n    margin-right: 100px;\r\n}\r\n\r\n.text-name{\r\n    padding: 15px;\r\n    color:  #7a7a7a !important;\r\n    height: 60px !important;\r\n    font-family: Raleway-SemiBold;\r\n    letter-spacing: 1px;\r\n    font-size: 1.4em;\r\n}\r\n\r\n.logout{\r\n    padding: 15px;\r\n    padding-right: 25px;\r\n}\r\n\r\n.right-block{\r\n    margin-bottom: 8px;\r\n    margin-top: 8px;\r\n}\r\n\r\n.navcustom{\r\n    background-color: white;\r\n    box-shadow: 0px 3px 10px 0px #999999;\r\n    min-width: 1420px !important;\r\n}\r\n\r\n#header {\r\n    top: 215px;\r\n    left: 50px;\r\n    position: absolute;\r\n    width: 100px;\r\n    height: 100px;\r\n}\r\n\r\n#longDiv {\r\n    margin: 100px 0 0 0;\r\n    width: 1000px;\r\n    height: 2000px;\r\n    border: 1px #000 solid;\r\n}\r\n\r\n@media (max-width: 769px) {\r\n    .navbar-fixed-top {\r\n    background-color: lightblue;\r\n}\r\n.navbar-collapse {\r\n    display: none!important;\r\n}\r\n.navbar-collapse.collapse {\r\n    display: none!important;\r\n}\r\n.navbar-nav {\r\n    float: none!important;\r\n    margin: 7.5px -15px;\r\n}\r\n.navbar-form{\r\n    display: none!important;\r\n}\r\n.navbar-brand{\r\n    display: none!important;\r\n}\r\n.navbar-right{\r\n    display: none!important;\r\n}\r\n.navbar-left{\r\n    display: none!important;\r\n}\r\n}\r\n\r\n.for-scroll{\r\n    min-width: 1420px;\r\n    overflow-x: auto ; \r\n}\r\n\r\n.top-navbar{\r\n    border-left: 2px solid #999999;\r\n}\r\n\r\n.search-holder{\r\n    border-radius: 0px;\r\n    color:  #7a7a7a !important;\r\n    background-color: #f0f1f7;\r\n    height: 60px !important;\r\n    padding-left: 20px !important; \r\n    font-family: Raleway-SemiBold;\r\n    letter-spacing: 1px;\r\n    font-size: 1.4em;\r\n    border: none;\r\n    width: 100%  !important;\r\n    box-shadow: none;\r\n}\r\n\r\n.search-group{\r\n    width: 500px;\r\n    margin-left: 100px;\r\n}\r\n\r\n.search-buttons{\r\n    background-color: #f0f1f7 !important;\r\n    border-radius: 7px;\r\n    height: 60px;\r\n    width: 100%;\r\n}\r\n\r\n.search-buttons:active {\r\n    box-shadow: 0 0px #666;\r\n    -webkit-transform: none;\r\n            transform: none;\r\n}\r\n\r\n.search-buttons:focus {\r\n    outline:0;\r\n}\r\n\r\n.rotateimg90 {\r\n    -webkit-transform:rotate(90deg);\r\n    transform: rotate(90deg);\r\n}\r\n\r\n.dropdown-menu{\r\n    background-color:  white !important;\r\n    padding: 5px;\r\n    font-size: 16px;\r\n    border: none;\r\n    cursor: pointer;\r\n    padding: 0;\r\n}\r\n\r\n.droplist-el{\r\n    font-family: Raleway-SemiBold;\r\n    letter-spacing: 1px;\r\n    font-size: 16px;\r\n    padding: 15px;\r\n    color:  #949495;\r\n    background-color:  white;    \r\n}\r\n\r\n.droplist-el:hover{\r\n    background-color: #f0f1f7;\r\n}\r\n.border{\r\n    border-top: 1px solid #cfd0d4;\r\n}\r\n\r\n.droplist-el-selected{\r\n    background-color: #f0f1f7;\r\n}\r\n\r\n.bottom-navbar{\r\n    margin-top: 76px; \r\n}\r\n\r\n.bottom-navbar-container{\r\n    padding-left: 30px;\r\n    padding-right: 30px;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px; \r\n}\r\n\r\n.text-myfiles{\r\n    font-family: Raleway-Bold;\r\n    letter-spacing: 1px;\r\n    font-size: 1.2em;\r\n    padding: 20px;\r\n    color:  #333333;\r\n    margin-left: 100px;\r\n}\r\n\r\n.breadcrumps-link{\r\n    color:  #333333;\r\n}\r\n\r\n.breadcrumps-link:visited {\r\n    color:  #333333;\r\n}\r\n\r\n.breadcrumps-link:hover {\r\n    color:  #333333;\r\n    text-decoration: none;\r\n    background-color: #f0f1f7;\r\n}\r\n\r\n.breadcrumps-link:active {\r\n    color:  #333333;\r\n}\r\n\r\n.sort-button{\r\n    background-color: transparent;\r\n    border-radius: 7px;\r\n    height: 43px;\r\n    width: 43px;\r\n}\r\n\r\n.sort-button:active {\r\n    box-shadow: 0 0px #666;\r\n    -webkit-transform: none;\r\n            transform: none;\r\n}\r\n\r\n.sort-button:focus {\r\n    outline:0;\r\n}\r\n\r\n.text-right{\r\n    font-family: Raleway-SemiBold;\r\n    letter-spacing: 1px;\r\n    font-size: 1.2em;\r\n    padding: 10px;\r\n    color:  #7a7a7a !important;\r\n    vertical-align: middle; \r\n}\r\n\r\n.icons{\r\n    padding: 5px;\r\n}\r\n\r\n.divicons{\r\n    margin-top: 20px;\r\n    margin-right: 125px;\r\n}\r\n\r\n.access-params{\r\n    font-family: Raleway-SemiBold;\r\n    letter-spacing: 1px;\r\n    font-size: 1.2em;\r\n    padding: 10px;\r\n    color:  #7a7a7a !important;\r\n    vertical-align: middle; \r\n    background-color: transparent;\r\n    border: none;\r\n    padding-top: 18px;\r\n}\r\n\r\n.access-params:focus {\r\n    outline:0;\r\n}\r\n\r\n.img-breadcrumbs{\r\n    height: 15px;\r\n    width: 15px;\r\n}\r\n.vertLine-r {\r\n    border-left: 1px solid #f0f1f7; /* Border on the left */\r\n    width: 1px; /* Width instead of height */\r\n    margin-top: 12px;\r\n    height: 40px;\r\n    padding: 7px;\r\n    margin-left: 5px;\r\n}\r\n\r\n.vertLine-l {\r\n    border-right: 1px solid #f0f1f7; /* Border on the left */\r\n    width: 1px; /* Width instead of height */\r\n    margin-top: 12px;\r\n    height: 40px;\r\n    padding: 7px;\r\n    margin-right: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_components/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-fixed-top navcustom\">\r\n  <span class=\"for-scroll\">\r\n    <div>\r\n      <span class=\"navbar-brand\">LOGO</span>\r\n    </div>\r\n    <div class=\"navbar-left\">\r\n      <form class=\"navbar-form\" role=\"search\">\r\n        <div class=\"input-group search-group\">\r\n          <div class=\"input-group-btn\">\r\n            <button type=\"button\" class=\"btn search-buttons\" (click)=\"search(serchInput.value)\">\r\n              <img src=\"assets\\icons\\search.svg\" width=\"20\" height=\"20\">\r\n            </button>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control search-holder\" placeholder=\"Поиск файлов\" #serchInput>\r\n          <div class=\"input-group-btn\">\r\n            <button type=\"button\" class=\"btn search-buttons dropdown-toggle\" data-toggle=\"dropdown\">\r\n              <span>\r\n                <img src=\"assets\\icons\\next.svg\" width=\"15\" height=\"15\" class=\"rotateimg90\">\r\n              </span>\r\n            </button>\r\n            <ul class=\"dropdown-menu\" role=\"menu\">\r\n              <li>\r\n                <a class=\"droplist-el\" (click)=\"toggleFileSearch()\" [ngClass]=\"{'droplist-el-selected': fileSearch}\">\r\n                  <span>Поиск по файлам</span>\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a class=\"droplist-el border\" (click)=\"toggleTagSearch()\" [ngClass]=\"{'droplist-el-selected': !fileSearch}\">\r\n                  <span>Поиск по тегам</span>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n\r\n      <li *ngIf=\"currentUser\" class=\"text-name right-block\">{{currentUser.name}}</li>\r\n      <li>\r\n        <div>\r\n          <div class=\"img-color-circle right-block\">\r\n            <img src=\"assets\\icons\\user.svg\" class=\"img-circle\">\r\n          </div>\r\n        </div>\r\n      </li>\r\n      <li>\r\n        <div class=\"logout right-block\">\r\n\r\n          <a [routerLink]=\"['/login']\" class=\"link\">\r\n            <span>\r\n              <img src=\"assets\\icons\\next.svg\" width=\"30\" height=\"30\">\r\n            </span>\r\n          </a>\r\n\r\n        </div>\r\n      </li>\r\n\r\n    </ul>\r\n    <div class=\"bottom-navbar\">\r\n      <div>\r\n        <div class=\"navbar-left\">\r\n          <div class=\"text-myfiles\">\r\n            <a [routerLink]=\"['']\" class=\"breadcrumps-link\" (click)=\"refresh()\">Мои файлы</a>\r\n            <span *ngFor=\"let item of breadcrumbs\">\r\n              <img src=\"assets\\icons\\next.svg\" class=\"img-breadcrumbs\">\r\n              <a [routerLink]=\"['', item.folderId]\" class=\"breadcrumps-link\">{{item.name}}</a>\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li>\r\n          <button class=\"access-params\">Настройки доступа</button>\r\n        </li>\r\n        <li>\r\n          <div class=\"vertLine-l\">\r\n          </div>\r\n        </li>\r\n        <li class=\"text-right\">Сортировка\r\n          <button type=\"button\" class=\"btn sort-button dropdown-toggle\" data-toggle=\"dropdown\">\r\n            <span>\r\n              <img src=\"assets\\icons\\next.svg\" width=\"15\" height=\"15\" class=\"rotateimg90\">\r\n            </span>\r\n          </button>\r\n          <div class=\"dropdown-menu\">\r\n            <li>\r\n              <a class=\"droplist-el\" [ngClass]=\"{'droplist-el-selected':  this.sortValue == SortType[SortType[SortType.creationDate]]}\" (click)=\"setType(SortType[SortType.creationDate])\">\r\n                <span>По дате создания</span>\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a class=\"droplist-el border\" [ngClass]=\"{'droplist-el-selected': this.sortValue == SortType[SortType[SortType.uploadDate]]}\" (click)=\"setType(SortType[SortType.uploadDate])\">\r\n                <span>По дате добавления</span>\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a class=\"droplist-el border\" [ngClass]=\"{'droplist-el-selected': this.sortValue == SortType[SortType[SortType.size]]}\" (click)=\"setType(SortType[SortType.size])\">\r\n                <span>По размеру</span>\r\n              </a>\r\n            </li>\r\n          </div>\r\n        </li>\r\n        <li>\r\n          <div class=\"vertLine-r\">\r\n          </div>\r\n        </li>\r\n        <li>\r\n          <div class=\"divicons\">\r\n            <span class=\"icons\" (click)=\"toggleList()\">\r\n              <img *ngIf=\"!grid\" src=\"assets\\icons\\list.svg\" width=\"30\" height=\"30\">\r\n              <img *ngIf=\"grid\" src=\"assets\\icons\\list-light.svg\" width=\"30\" height=\"30\">\r\n            </span>\r\n            <span class=\"icons\" (click)=\"toggleGrid()\">\r\n              <img *ngIf=\"grid\" src=\"assets\\icons\\tile.svg\" width=\"30\" height=\"30\">\r\n              <img *ngIf=\"!grid\" src=\"assets\\icons\\tile-light.svg\" width=\"30\" height=\"30\">\r\n            </span>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </span>\r\n</nav>\r\n<!-- <div id=\"header\">\r\n    Haha, I am a header. Nah.. Nah na na na\r\n</div>\r\n<div id=\"longDiv\">\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed nibh nibh, ut volutpat turpis. Aliquam at nunc nisl. Curabitur sit amet lectus eget ligula interdum molestie. Vestibulum ultricies tortor eleifend mi luctus lacinia. Aliquam augue felis, tempus ac mattis ac, volutpat id sapien. Sed at arcu orci, ac sodales mi. Sed erat sapien, feugiat auctor dapibus sed, rutrum quis urna. Donec pulvinar mollis ligula quis tempus. Sed consectetur purus id ipsum volutpat fringilla sagittis est sodales? Integer quis mollis eros! Morbi quis dignissim est.\r\n\r\nIn quis sapien mi! In vestibulum, leo et pellentesque consectetur, turpis metus vehicula ipsum, vel facilisis est lectus non orci. Donec aliquet lacus vel tellus semper luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras erat eros, scelerisque ac rhoncus eu, dapibus non magna. Fusce ante erat, sollicitudin id fringilla ac, viverra id turpis. Suspendisse sed nisl justo, quis elementum dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.\r\n\r\nCras interdum, nisi non placerat elementum; nisl turpis feugiat lectus, eu blandit metus arcu vitae nunc. Proin egestas, tortor ullamcorper mattis luctus, sapien augue rhoncus erat; vel cursus quam purus lobortis velit. Etiam posuere hendrerit nunc id volutpat! Quisque tempus libero sed leo pulvinar sed adipiscing justo volutpat. Integer consequat semper semper. Cras tincidunt nunc id quam pulvinar id rhoncus neque dictum. Pellentesque turpis sem, semper eu accumsan eget, tempor tempus ligula. Quisque feugiat luctus enim, vitae dictum lectus fermentum ut.    \r\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/_components/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_service__ = __webpack_require__("../../../../../src/app/_components/home/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sortType__ = __webpack_require__("../../../../../src/app/_components/menu/sortType.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = (function () {
    function MenuComponent(homeService) {
        this.homeService = homeService;
        this.toggleGridEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.refreshEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.toggleSearchEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.sortEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.grid = true;
        this.breadcrumbs = [];
        this.fileSearch = true;
        this.SortType = __WEBPACK_IMPORTED_MODULE_2__sortType__["a" /* SortType */];
        var userInfoWithToken = JSON.parse(localStorage.getItem('currentUser'));
        this.currentUser = userInfoWithToken.userInfo;
    }
    MenuComponent.prototype.ngOnInit = function () {
        if (JSON.parse(localStorage.getItem('grid')) === null) {
            this.grid = true;
        }
        else {
            this.grid = JSON.parse(localStorage.getItem('grid'));
        }
        if (!(this.folderId === undefined)) {
            this.loadBreadcrumbs();
        }
    };
    MenuComponent.prototype.ngOnChanges = function () {
        this.loadBreadcrumbs();
    };
    MenuComponent.prototype.loadBreadcrumbs = function () {
        var _this = this;
        this.homeService.loadBreadcrumbs(this.folderId).subscribe(function (data) {
            _this.breadcrumbs = data.reverse();
            if (!data.success && data.message) {
                console.log(data.message);
            }
            else {
                console.log(_this.breadcrumbs);
                console.log('Loading bc successfull');
            }
        }, function (error) {
            //show info about error
            console.log('Loading bc unsuccessfull');
        });
    };
    MenuComponent.prototype.toggleGrid = function () {
        this.grid = true;
        this.toggleGridEvent.emit(true);
        localStorage.setItem('grid', JSON.stringify(this.grid));
    };
    MenuComponent.prototype.toggleList = function () {
        this.grid = false;
        this.toggleGridEvent.emit(false);
        localStorage.setItem('grid', JSON.stringify(this.grid));
    };
    MenuComponent.prototype.toggleFileSearch = function () {
        this.fileSearch = true;
    };
    MenuComponent.prototype.toggleTagSearch = function () {
        this.fileSearch = false;
    };
    MenuComponent.prototype.search = function (searchInput) {
        var searchModel = {
            text: searchInput,
            fileTypeSearch: this.fileSearch
        };
        this.toggleSearchEvent.emit(searchModel);
    };
    MenuComponent.prototype.refresh = function () {
        this.refreshEvent.emit();
    };
    MenuComponent.prototype.setType = function (value) {
        this.sortValue = __WEBPACK_IMPORTED_MODULE_2__sortType__["a" /* SortType */][value];
        this.sortEvent.emit(__WEBPACK_IMPORTED_MODULE_2__sortType__["a" /* SortType */][value]);
    };
    return MenuComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], MenuComponent.prototype, "toggleGridEvent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], MenuComponent.prototype, "refreshEvent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], MenuComponent.prototype, "toggleSearchEvent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], MenuComponent.prototype, "sortEvent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MenuComponent.prototype, "folderId", void 0);
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/_components/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_components/menu/menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__home_home_service__["a" /* HomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__home_home_service__["a" /* HomeService */]) === "function" && _a || Object])
], MenuComponent);

var _a;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/_components/menu/sortType.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortType; });
var SortType;
(function (SortType) {
    SortType[SortType["creationDate"] = 0] = "creationDate";
    SortType[SortType["uploadDate"] = 1] = "uploadDate";
    SortType[SortType["size"] = 2] = "size";
})(SortType || (SortType = {}));
//# sourceMappingURL=sortType.js.map

/***/ }),

/***/ "../../../../../src/app/_components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fill { \r\n    min-height: 100vh;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center\r\n}\r\n\r\np.logo {\r\n     text-align: center;\r\n     text-transform: uppercase;\r\n     font-weight: bold;\r\n     font-size: 3.5em;\r\n     letter-spacing: 10px;\r\n     color: #676767;\r\n     font-family: Raleway-Black;\r\n}\r\n\r\np.welcome {\r\n    text-align: center;\r\n    font-size: 1.6em;\r\n    color: #999999;\r\n    font-family: Raleway-SemiBold;\r\n    letter-spacing: 3px;\r\n}\r\n\r\n.title {\r\n    width: 550px; /* Ширина блока */ /* Для Firefox */  \r\n    box-sizing: border-box; /* Ширина блока с полями */\r\n    padding-bottom: 20px;\r\n}\r\n\r\np.login {\r\n    text-align: center;\r\n    font-weight: bold;\r\n    color: #333333;\r\n    font-size: 2.4em;\r\n    font-family: Raleway-Black;\r\n    letter-spacing: 2px;\r\n}\r\n\r\n.textchoose {\r\n    padding-bottom: 40px;\r\n    color: #7a7a7a;\r\n    font-family: Raleway-SemiBold;\r\n    letter-spacing: 2px;\r\n}\r\n\r\np.register {\r\n    text-align: center;\r\n    font-size: 1.4em;\r\n    font-family: Raleway-SemiBold;\r\n    letter-spacing: 2px;\r\n}\r\n\r\n.link {\r\n    text-decoration: none;\r\n    color: #d3346c;\r\n    font-size: 1em;\r\n}\r\n\r\n.whiteblock {\r\n    background-color: #FFFFFF;\r\n    width: 550px; /* Ширина блока */\r\n    height: 700px;\r\n    padding-bottom: 100px; /* Поля */\r\n    padding-right: 95px;\r\n    padding-left: 95px;\r\n    padding-top: 100px;\r\n    margin-top: 10px; /* Отступ сверху */\r\n    border-radius: 5px; /* Для Firefox */  \r\n    box-sizing: border-box; /* Ширина блока с полями */\r\n    box-shadow: 0px 3px 4px 0px #b9b9b9;\r\n}\r\n\r\n.form-control {\r\n     height: 60px !important;\r\n     border: 2px solid #999999 !important;\r\n     border-radius: 4px !important; \r\n     padding-left: 20px !important; \r\n     color: #7a7a7a;\r\n     font-family: Raleway-SemiBold;\r\n     letter-spacing: 1px;\r\n     font-size: 1.2em;\r\n }\r\n\r\n .button {\r\n    background-color: #34d3bb !important;/* Green */\r\n    width: 360px;\r\n    height: 60px;\r\n    color: white;\r\n    padding: 9px 0px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 0px 0px;\r\n    cursor: pointer;\r\n    border-radius: 30px; /* Safari */\r\n    transition-duration: 0.4s;\r\n    border: 2px solid #34d3bb;\r\n    margin-top: 60px;\r\n    font-family: Raleway-SemiBold;\r\n    letter-spacing: 1px;\r\n    font-size: 1.4em;\r\n}\r\n\r\n.button:focus {\r\n    outline:0;\r\n}\r\n\r\n.button:hover {\r\n    background-color: #FFFFFF !important;\r\n    color: #616161;\r\n    border: 2px solid #999999;\r\n}\r\n\r\n.vertical-align {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.form-group{\r\n    margin: 0px;\r\n}\r\n\r\n.alerts {\r\n    padding: 0px;\r\n    margin:  0px;\r\n    color: #b13748;\r\n    font-family: Raleway-SemiBold;\r\n    letter-spacing: 1px;\r\n    font-size: 1em;\r\n    max-height: 15px;\r\n    position: relative;\r\n    bottom: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container fill vertical-align\">\r\n\r\n    <div>\r\n        <div class=\"title\">\r\n            <p class=\"logo\">logo</p>\r\n            <p class=\"welcome\">Добро пожаловать!</p>\r\n        </div>\r\n        <div class=\"whiteblock\">\r\n            <div class=\"textchoose\">\r\n                <p class=\"login\">Зарегистрируйтесь</p>\r\n                <div>\r\n                    <p class=\"register\">или\r\n                        <a [routerLink]=\"['/login']\" class=\"link\">Войдите в свой аккаунт</a>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\r\n                <div class=\"form-group\">\r\n                    <label for=\"name\"></label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Имя пользователя\" [(ngModel)]=\"model.name\" #name=\"ngModel\"\r\n                        required maxlength=\"50\" />\r\n                    <div *ngIf=\"name.errors && (name.dirty && name.touched)\" class=\"alerts\">\r\n                        <br>\r\n                        <div [hidden]=\"!name.errors.required\">\r\n                            Имя пользователя необходимо.\r\n                        </div>\r\n                        <div [hidden]=\"!name.errors.maxlength\">\r\n                            Максимальная длинна имени 50 символов.\r\n                        </div>\r\n                    </div>\r\n                    <!-- <div *ngIf=\"f.submitted && !name.valid\" class=\"help-block\">Имя пользователя необходимо</div> -->\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\r\n                    <label for=\"email\"></label>\r\n                    <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"E-mail\" [(ngModel)]=\"model.email\" #email=\"ngModel\" required\r\n                        email />\r\n                    <div *ngIf=\"email.errors && (email.dirty && email.touched)\" class=\"alerts\">\r\n                        <br>\r\n                        <div [hidden]=\"!email.errors.required\">\r\n                            Email необходим.\r\n                        </div>\r\n                        <div [hidden]=\"!email.errors.email\">\r\n                            Введите корректный email.\r\n                        </div>\r\n                    </div>\r\n                    <!-- <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">E-mail необходим</div> -->\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n                    <label for=\"password\"></label>\r\n                    <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Пароль\" [(ngModel)]=\"model.password\" #password=\"ngModel\"\r\n                        required minlength=\"6\" maxlength=\"50\" />\r\n                    <div *ngIf=\"password.errors && (password.dirty && password.touched)\" class=\"alerts\">\r\n                        <br>\r\n                        <div [hidden]=\"!password.errors.required\">\r\n                            Пароль необходим.\r\n                        </div>\r\n                        <div [hidden]=\"!password.errors.minlength\">\r\n                            Минимальная длинна пароля 6 символов.\r\n                        </div>\r\n                        <div [hidden]=\"!password.errors.maxlength\">\r\n                            Максимальная длинна пароля 50 символов.\r\n                        </div>\r\n                    </div>\r\n                    <!-- <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Пароль необходим</div> -->\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <button [disabled]=\"loading\" class=\"button\">Зарегистрироваться</button>\r\n                </div>\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n<simple-notifications [options]=\"options\"></simple-notifications>"

/***/ }),

/***/ "../../../../../src/app/_components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_authentification_service__ = __webpack_require__("../../../../../src/app/_components/login/authentification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(route, router, authentificationService, notificationsService) {
        this.route = route;
        this.router = router;
        this.authentificationService = authentificationService;
        this.notificationsService = notificationsService;
        this.model = {};
        this.loading = false;
        this.options = {
            position: ["bottom", "right"],
            timeOut: 3000,
            showProgressBar: true,
            pauseOnHover: true,
            clickToClose: true,
            clickIconToClose: true,
            lastOnBottom: true,
            maxLength: 500
        };
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.loading = true;
        this.authentificationService.addUser(this.model.name, this.model.email, this.model.password)
            .subscribe(function (data) {
            // set success message and pass true paramater to persist the message after redirecting to the login page
            //this.alertService.success('Registration successful', true);
            if (!data.success && data.message) {
                _this.notificationsService.error('Упс!', data.message, _this.options);
                _this.loading = false;
            }
            else {
                console.log('AddingUser succesfull');
                _this.authentificationService.login(_this.model.email, _this.model.password)
                    .subscribe(function (data) {
                    console.log('Login succesfull');
                    _this.router.navigate([_this.returnUrl]);
                }, function (error) {
                    console.log('Login unsuccesfull');
                    _this.loading = false;
                });
            }
        }, function (error) {
            console.log('AddingUser unsuccesfull');
            _this.loading = false;
            _this.notificationsService.error('Упс!', 'Неполадки с сервером.', _this.options);
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/_components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__login_authentification_service__["a" /* AuthentificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_authentification_service__["a" /* AuthentificationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_notifications__["NotificationsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_notifications__["NotificationsService"]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/_guards/authentification.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthentificationGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthentificationGuard = (function () {
    function AuthentificationGuard(router) {
        this.router = router;
    }
    AuthentificationGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    return AuthentificationGuard;
}());
AuthentificationGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthentificationGuard);

var _a;
//# sourceMappingURL=authentification.guard.js.map

/***/ }),

/***/ "../../../../../src/app/_guards/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentification_guard__ = __webpack_require__("../../../../../src/app/_guards/authentification.guard.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__authentification_guard__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/_pipes/bytes.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BytesPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BytesPipe = BytesPipe_1 = (function () {
    function BytesPipe() {
    }
    BytesPipe.prototype.transform = function (input, decimal, from) {
        if (decimal === void 0) { decimal = 0; }
        if (from === void 0) { from = 'B'; }
        if (!(this.isNumberFinite(input) &&
            this.isNumberFinite(decimal) &&
            this.isInteger(decimal) &&
            this.isPositive(decimal))) {
            return input;
        }
        var bytes = input;
        var unit = from;
        while (unit !== 'B') {
            bytes *= 1024;
            unit = BytesPipe_1.formats[unit].prev;
        }
        for (var key in BytesPipe_1.formats) {
            var format = BytesPipe_1.formats[key];
            if (bytes < format.max) {
                var prev = format.prev ? BytesPipe_1.formats[format.prev] : undefined;
                var result = prev ?
                    this.toDecimal(bytes / prev.max, decimal) :
                    this.toDecimal(bytes, decimal);
                return result + " " + key;
            }
        }
    };
    BytesPipe.prototype.isNumberFinite = function (value) {
        return this.isNumber(value) && isFinite(value);
    };
    BytesPipe.prototype.isNumber = function (value) {
        return typeof value === 'number';
    };
    // Not strict positive
    BytesPipe.prototype.isPositive = function (value) {
        return value >= 0;
    };
    BytesPipe.prototype.isInteger = function (value) {
        // No rest, is an integer
        return (value % 1) === 0;
    };
    BytesPipe.prototype.toDecimal = function (value, decimal) {
        return Math.round(value * Math.pow(10, decimal)) / Math.pow(10, decimal);
    };
    return BytesPipe;
}());
BytesPipe.formats = {
    'B': { max: 1024 },
    'KB': { max: Math.pow(1024, 2), prev: 'B' },
    'MB': { max: Math.pow(1024, 3), prev: 'KB' },
    'GB': { max: Math.pow(1024, 4), prev: 'MB' },
    'TB': { max: Number.MAX_SAFE_INTEGER, prev: 'GB' }
};
BytesPipe = BytesPipe_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'bytes'
    })
], BytesPipe);

var BytesPipe_1;
//# sourceMappingURL=bytes.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = " <router-outlet></router-outlet>\r\n          \r\n          \r\n\r\n<!-- <body class=\"body-style\"></body> -->\r\n<!-- <h1><span style=\"color:#285783\">{{title}}</span></h1>\r\n\r\n<hr />\r\n<table class='table' style=\"background-color:#FFFFFF; border:2px #6D7B8D; padding:5px;width:99%;table-layout:fixed;\" cellpadding=\"2\"\r\n  cellspacing=\"2\" *ngIf=\"apiValues\">\r\n  <tr>\r\n    <td width=\"180\" align=\"center\"><strong>Names</strong></td>\r\n  </tr>\r\n  <tbody *ngFor=\"let value of apiValues\">\r\n    <tr>\r\n      <td align=\"center\" style=\"border: solid 1px #659EC7; padding: 5px;table-layout:fixed;\">\r\n        <span style=\"color:#9F000F\">{{value}}</span>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table> -->"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        this.title = "Logo";
        this.apiValues = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        // this._httpService.get('/api/files').subscribe(values => {
        //   this.apiValues = values.json() as string[];
        // });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_contextmenu__ = __webpack_require__("../../../../ngx-contextmenu/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_menu_menu_component__ = __webpack_require__("../../../../../src/app/_components/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_index__ = __webpack_require__("../../../../../src/app/_guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("../../../../../src/app/_components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__("../../../../../src/app/_components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__ = __webpack_require__("../../../../../src/app/_components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_login_authentification_service__ = __webpack_require__("../../../../../src/app/_components/login/authentification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_home_home_service__ = __webpack_require__("../../../../../src/app/_components/home/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_data_data_component__ = __webpack_require__("../../../../../src/app/_components/data/data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_bytes_pipe__ = __webpack_require__("../../../../../src/app/_pipes/bytes.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_7__components_menu_menu_component__["a" /* MenuComponent */], __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__["a" /* RegisterComponent */], __WEBPACK_IMPORTED_MODULE_14__components_data_data_component__["a" /* DataComponent */], __WEBPACK_IMPORTED_MODULE_17__pipes_bytes_pipe__["a" /* BytesPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_contextmenu__["b" /* ContextMenuModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_16_angular2_notifications__["SimpleNotificationsModule"].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__guards_index__["a" /* AuthentificationGuard */],
            __WEBPACK_IMPORTED_MODULE_12__components_login_authentification_service__["a" /* AuthentificationService */],
            __WEBPACK_IMPORTED_MODULE_13__components_home_home_service__["a" /* HomeService */],
            __WEBPACK_IMPORTED_MODULE_16_angular2_notifications__["NotificationsService"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("../../../../../src/app/_components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__ = __webpack_require__("../../../../../src/app/_components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__ = __webpack_require__("../../../../../src/app/_components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_index__ = __webpack_require__("../../../../../src/app/_guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_data_data_component__ = __webpack_require__("../../../../../src/app/_components/data/data.component.ts");






var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_index__["a" /* AuthentificationGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__["a" /* RegisterComponent */] },
    { path: ':folderId', component: __WEBPACK_IMPORTED_MODULE_5__components_data_data_component__["a" /* DataComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_index__["a" /* AuthentificationGuard */]] },
    //   { path: ':fileId',  component: FilePreviewComponent }
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map