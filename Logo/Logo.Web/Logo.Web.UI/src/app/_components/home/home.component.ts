import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ViewChild, ElementRef } from '@angular/core';
import { Folder } from './folder';
import { FileCustom } from './file';
import { UserInfoWithToken } from '../login/user';
import { HomeService } from './home.service';
import { Observable } from 'rxjs/Observable';
import { SortType } from '../menu/sortType';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { ContextMenuComponent } from 'ngx-contextmenu';
import { NotificationsService } from 'angular2-notifications';
import { saveAs } from 'file-saver';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    @ViewChild('closeCreateFolderModal') closeCreateFolderModal: ElementRef;
    @ViewChild('closeUploadFileModal') closeUploadFileModal: ElementRef;
    @ViewChild('closeRenameFolderModal') closeRenameFolderModal: ElementRef;
    @ViewChild('closeAddTagFolderModal') closeAddTagFolderModal: ElementRef;
    @ViewChild('closeDeleteFolderModal') closeDeleteFolderModal: ElementRef;
    @ViewChild('closeRenameFileModal') closeRenameFileModal: ElementRef;
    @ViewChild('closeAddTagFileModal') closeAddTagFileModal: ElementRef;
    @ViewChild('closeDeleteFileModal') closeDeleteFileModal: ElementRef;

    @ViewChild("inputfiles") inputfiles;
    @ViewChild(ContextMenuComponent) public basicMenu: ContextMenuComponent;
    model: any = {};
    currentUser: UserInfoWithToken;
    folders: Folder[] = [];
    files: FileCustom[] = [];
    fileToShow: FileCustom;    
    uploadFiles: Array<any>;
    selectedObjectId: string;
    selectedFolderName: string;
    tags: string;
    grid: true;
    folderrenamem: any = {};
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
    SortType: typeof SortType = SortType;
    order: any;
    showImage: boolean = false;
    srccarousell: string = "assets\\icons\\next.svg";
    srccarouselr: string = "assets\\icons\\next.svg";
    srccarouselc: string = "assets\\icons\\cancel.svg";
    URL: string = "assets\\icons\\reload.svg";


    constructor(private homeService: HomeService,
        private router: Router,
        private route: ActivatedRoute,
        private notificationsService: NotificationsService,
        private sanitizer: DomSanitizer) {
    }

    ngOnInit() {
        this.loadRootFolders();
        this.loadRootFiles();
        if (JSON.parse(localStorage.getItem('grid')) === null) {
            this.grid = true;
        }
        else {
            this.grid = JSON.parse(localStorage.getItem('grid'));
        }
    }

    //initial
    private loadRootFolders() {
        this.homeService.loadRootFolders().subscribe(
            data => {
                if (!data.success && data.message) {
                    console.log(data.message)
                    this.pushErrorNotification('Загрузка папок прошла неуспешно. ' + data.message)
                }
                else {
                    console.log('Loading root folders successfull');
                    this.pushSuccessNotification('Загрузка папок прошла успешно.')
                }
                this.folders = data as Folder[];
            },
            error => {
                //show info about error
                this.pushErrorNotification('Загрузка папок прошла неуспешно')
                console.log('Loading root folders unsuccessfull.');
            });


    }

    private loadRootFiles() {
        this.homeService.loadRootFiles().subscribe(
            data => {

                if (!data.success && data.message) {
                    console.log(data.message)
                    this.pushErrorNotification('Загрузка файлов прошла неуспешно. ' + data.message)
                }
                else {
                    console.log('Loading root files successfull');
                    this.pushSuccessNotification('Загрузка файлов прошла успешно.')
                    this.files = data as FileCustom[];
                    for (let file of this.files) {
                        if (this.checkIfJpg(file.name) == true) {
                            file.resizedImage = 'data:image/jpg;base64,' + file.resizedImage;
                        }
                        else {
                            file.resizedImage = 'data:image/png;base64,' + file.resizedImage;
                        }
                    }
                }
            },
            error => {
                //show info about error
                console.log('Loading root files unsuccessfull');
                this.pushErrorNotification('Загрузка файлов прошла неуспешно.')
            });


    }

    //menu
    createfolder() {
        this.homeService.createfolder(this.model.foldername, null)
            .subscribe(
            data => {
                if (!data.success && data.message) {
                    console.log(data.message)
                    this.pushErrorNotification('Создание папки прошло неуспешно. ' + data.message)
                }
                else {
                    console.log('Creating folder successfull', data);
                    this.pushSuccessNotification('Создание папки прошло успешно.')
                }
                this.closeCreateFolderModal.nativeElement.click();
                this.loadRootFolders();
            },
            error => {
                console.log('Cant create folder', error);
                this.closeCreateFolderModal.nativeElement.click();
                this.pushErrorNotification('Создание папки прошло неуспешно.')
            });
    }

    uploadFile() {
        let fi = this.inputfiles.nativeElement;
        for (var _i = 0; _i < fi.files.length; _i++) {

            if (this.checkIfValid(fi.files[_i])) {
                let formData: FormData = new FormData();
                formData.append('FileContent', fi.files[_i]);
                formData.append('CreationDate', fi.files[_i].lastModifiedDate);
                formData.append('ParentFolderId', null);
                formData.append('Tags', this.uploadFiles[_i].hashtag ? this.uploadFiles[_i].hashtag : "");
                let creationDate = new Date(fi.files[_i].lastModifiedDate);

                this.homeService.uploadFile(formData)
                    .subscribe(
                    data => {
                        if (!data.success && data.message) {
                            console.log(data.message)
                            this.pushErrorNotification('Загрузка файла ' + data.fileName + ' прошла неуспешно. ' + data.message)
                            console.log('name file', fi.files[0], _i);
                        }
                        else {
                            console.log('upload file success');
                            this.pushSuccessNotification('Загрузка файла ' + data.fileName + ' прошла успешно.')
                        }
                        this.closeUploadFileModal.nativeElement.click();
                        this.loadRootFiles();
                    },
                    error => {
                        console.log('Cant upload file', error);
                        this.closeUploadFileModal.nativeElement.click();
                        this.pushErrorNotification('Загрузка файла прошла неуспешно.')
                    });
            }
        }
    }

    //folders
    renamefolder() {
        let folderId = this.selectedObjectId;
        this.homeService.renameFolder(this.folderrenamem.name, folderId)
            .subscribe(
            data => {
                if (!data.success && data.message) {
                    console.log(data.message)
                    this.pushErrorNotification('Переименование папки прошло неуспешно. ' + data.message)
                }
                else {
                    console.log('Renaming folder successfull for ', folderId);
                    this.pushSuccessNotification('Переименование папки прошло успешно.')
                }
                this.closeRenameFolderModal.nativeElement.click();
                this.loadRootFolders();
            },
            error => {
                this.closeRenameFolderModal.nativeElement.click();
                console.log('Cant rename folderfor ', folderId);
                this.pushErrorNotification('Переименование папки прошло неуспешно.')
            });
    }

    deleteFolder() {
        let folderId = this.selectedObjectId;
        this.homeService.deleteFolder(folderId)
            .subscribe(
            data => {
                if (!data.success && data.message) {
                    console.log(data.message)
                    this.pushErrorNotification('Удаление папки прошло неуспешно. ' + data.message)
                }
                else {
                    console.log('Delete folder successfull');
                    this.pushSuccessNotification('Удаление папки прошло успешно.')
                }
                this.closeDeleteFolderModal.nativeElement.click();
                this.loadRootFolders();
            },
            error => {
                this.closeDeleteFolderModal.nativeElement.click();
                console.log('Cant delete folder');
                this.pushErrorNotification('Удаление папки прошло неуспешно.')
            });
    }

    addTags() {
        let folderId = this.selectedObjectId;
        this.homeService.addTags(folderId, this.model.tags)
            .subscribe(
            data => {
                if (!data.success && data.message) {
                    console.log(data.message)
                    this.pushErrorNotification('Добавление тегов прошло неуспешно. ' + data.message)
                }
                else {
                    console.log('Add tags successfull');
                    this.pushSuccessNotification('Добавление тегов прошло успешно.')
                }
                this.closeAddTagFolderModal.nativeElement.click();
                this.loadRootFolders();
            },
            error => {
                this.closeAddTagFolderModal.nativeElement.click();
                console.log('Cant add tags');
                this.pushErrorNotification('Добавление тегов прошло неуспешно.')
            });
    }

    //files
    renameFile() {
        let fileId = this.selectedObjectId;
        console.log(this.model.renameFile, fileId);
        this.homeService.renameFile(this.model.renameFile, fileId)
            .subscribe(
            data => {
                if (!data.success && data.message) {
                    console.log(data.message)
                    this.pushErrorNotification('Переименование файла прошло неуспешно. ' + data.message)
                }
                else {
                    console.log('Renaming file successfull for ', fileId);
                    this.pushSuccessNotification('Переименование файла прошло успешно.')
                }
                this.closeRenameFileModal.nativeElement.click();
                this.loadRootFiles()
            },
            error => {
                this.closeRenameFileModal.nativeElement.click();
                console.log('Cant rename file for ', fileId);
                this.pushErrorNotification('Переименование файла прошло неуспешно.')
            });
    }

    deleteFile() {
        let fileId = this.selectedObjectId;
        this.homeService.deleteFile(fileId)
            .subscribe(
            data => {
                if (!data.success && data.message) {
                    console.log(data.message)
                    this.pushErrorNotification('Удаление файла прошло неуспешно. ' + data.message)
                }
                else {
                    console.log('Delete file successfull');
                    this.pushSuccessNotification('Удаление файла прошло успешно.')
                }
                this.closeDeleteFileModal.nativeElement.click();
                this.loadRootFiles()
            },
            error => {
                this.closeDeleteFileModal.nativeElement.click();
                console.log('Cant delete file');
                this.pushErrorNotification('Удаление файла прошло неуспешно.')
            });
    }

    addTagsFile() {
        let fileId = this.selectedObjectId;
        this.homeService.addTagsFile(fileId, this.model.tags)
            .subscribe(
            data => {
                if (!data.success && data.message) {
                    console.log(data.message)
                    this.pushErrorNotification('Добавление тегов прошло неуспешно. ' + data.message)
                }
                else {
                    console.log('Add tags successfull');
                    this.pushSuccessNotification('Добавление тегов прошло успешно.')
                }
                this.closeAddTagFileModal.nativeElement.click();
                this.loadRootFiles()
            },
            error => {
                this.closeAddTagFileModal.nativeElement.click();
                console.log('Cant add tags');
                this.pushErrorNotification('Добавление тегов прошло неуспешно.')
            });
    }


    //folders
    openRenameFolderModal(folderId: string) {
        document.getElementById("openRenameFolderModalButton").click();
        console.log('modal for rename open ', folderId);
        this.selectedObjectId = folderId;
    }

    openAddTagFolderModal(folderId: string) {
        document.getElementById("openAddTagFolderModalButton").click();
        console.log('modal for add tag open ', folderId);
        this.selectedObjectId = folderId;
    }

    callDownloadZIP(folderId: string) {

    }

    openDeleteFolderModal(folderId: string) {
        document.getElementById("openDeleteFolderModalButton").click();
        console.log('modal for deleting open ', folderId);
        this.selectedObjectId = folderId;
    }

    //files
    openRenameFileModal(fileId: string) {
        document.getElementById("openRenameFileModalButton").click();
        console.log('modal for rename open ', fileId);
        this.selectedObjectId = fileId;
    }

    openAddTagFileModal(fileId: string) {
        document.getElementById("openAddTagFileModalButton").click();
        console.log('modal for add tag open ', fileId);
        this.selectedObjectId = fileId;
    }

    callDownload(fileId: string) {
        this.selectedObjectId = fileId;
        this.homeService.downloadFile(fileId)
            .subscribe(
            data => {
                console.log('Download successfull');
                var fileExtension = data.type.substring(data.type.lastIndexOf("/") + 1, data.type.length);
                var filename = 'file.' + fileExtension;
                saveAs(data, this.files[this.getIfromId(fileId)].name);
            },
            error => {
                console.log('Cant download');
                this.pushErrorNotification('Скачивание файла прошло неуспешно.')
            });
    }

    openDeleteFileModal(fileId: string) {
        document.getElementById("openDeleteFileModalButton").click();
        console.log('modal for deleting open ', fileId);
        this.selectedObjectId = fileId;
    }

    search(searchModel) {
        this.homeService.search(searchModel.text, searchModel.fileTypeSearch)
            .subscribe(
            data => {
                if (!data.success && data.message) {
                    console.log(data.message)
                }
                else {
                    console.log('seacrh successfull');
                }
                this.files = data as FileCustom[];
                this.folders = [];
            },
            error => {
                this.closeAddTagFileModal.nativeElement.click();
                console.log('Cant search');
            });
    }

    toggleGrid(res) {
        this.grid = res;
    }

    moveToSelectedFolder(folderId, folderName) {
        this.router.navigate(['', folderId]);
    }

    onChange(fileInput: any[]) {
        this.uploadFiles = fileInput;
    }

    checkIfImage(name: string) {
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
    }

    checkIfValid(file: any) {
        var fileExtension = "";
        if (file.name.lastIndexOf(".") > 0) {
            fileExtension = file.name.substring(file.name.lastIndexOf(".") + 1, file.name.length);
        }
        if ((fileExtension.toLowerCase() == "jpg" || "png" || "mov" || "avi" || "mkv") &&
            (file.size < 50000000) &&
            file.name.length < 50) {
            return true;
        }

        return false;

    }

    checkIfJpg(name: string) {
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
    }

    pushSuccessNotification(message: string, options?: any) {
        this.notificationsService.success('Ура! ', message, options);
    }

    pushErrorNotification(message: string, options?: any) {
        this.notificationsService.error('Упс! У нас что-то сломалось.', message, options);
    }

    sort(sortType: any) {
        let swapped: boolean = true;
        let z = 0;

        while (swapped) {
            swapped = false;

            for (var _i = 0; _i < this.files.length - 1 - z; _i++) {
                if (this.files[_i][SortType[sortType]] > this.files[_i + 1][SortType[sortType]]) {
                    let buf: any = this.files[_i];
                    this.files[_i] = this.files[_i + 1];
                    this.files[_i + 1] = buf;
                    swapped = true;
                }
            }
            z++;
        }
    }

    openImage(fileId: string) {
        this.showImage = true;
        this.fileToShow = this.files[this.getIfromId(fileId)];
        
        this.mouse('srccarouselr', 'assets\\icons\\next.svg');
        this.mouse('srccarousell', 'assets\\icons\\next.svg')
        this.URL = "assets\\icons\\reload.svg";
        this.homeService.downloadFile(fileId)
            .subscribe(
            data => {
                this.createImageFromBlob(data)
            });
    }


    createImageFromBlob(image: Blob) {
        let reader = new FileReader();
        reader.addEventListener("load", () => {
            this.URL = reader.result;
        }, false);

        if (image) {
            reader.readAsDataURL(image);
        }
    }
    sanitize(url: string) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    }

    mouse(srccarousel: string, src: string) {
        this[srccarousel] = src
    }

    getIfromId(id: string): any {
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
    }
}
