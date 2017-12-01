import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute } from '@angular/router';
import { ViewChild, ElementRef } from '@angular/core';
import { Folder } from '../home/folder';
import { FileCustom } from '../home/file';
import { UserInfoWithToken } from '../login/user';
import { HomeService } from '../home/home.service';
import { Observable } from 'rxjs/Observable';
import { SortType } from '../menu/sortType';
import { ContextMenuComponent } from 'ngx-contextmenu';
import { NotificationsService } from 'angular2-notifications';
import { saveAs } from 'file-saver';
import { DomSanitizer } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-data',
    templateUrl: './data.component.html',
    styleUrls: ['../home/home.component.css']
})

export class DataComponent implements OnInit {
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
    folderId: string;
    loading: boolean = false;

    private sub: Subscription;

    constructor(
        private homeService: HomeService,
        private router: Router,
        private route: ActivatedRoute,
        private notificationsService: NotificationsService,
        private sanitizer: DomSanitizer) { }

    ngOnInit() {
        this.sub = this.route.params
            .switchMap(params => {
                this.folderId = params['folderId'];
                console.log('ngOnInit datac', this.folderId);
                this.loadFiles();
                return this.homeService.loadFolders(this.folderId);
            })
            .subscribe(res => this.folders = res);
        if (JSON.parse(localStorage.getItem('grid')) === null) {
            this.grid = true;
        }
        else {
            this.grid = JSON.parse(localStorage.getItem('grid'));
        }
    }

    //initial
    private loadFolders() {
        this.homeService.loadFolders(this.folderId).subscribe(
            data => {
                if (!data.success && data.message) {
                    console.log(data.message)
                    this.pushErrorNotification('Загрузка папок прошла неуспешно. ' + data.message)
                }
                else {
                    console.log('Loading folders successfull');
                }
                this.folders = data as Folder[];
            },
            error => {
                this.pushErrorNotification('Загрузка папок прошла неуспешно')
                console.log('Loading folders unsuccessfull');
            });

    }

    private loadFiles() {
        this.homeService.loadFiles(this.folderId).subscribe(
            data => {
                if (!data.success && data.message) {
                    console.log(data.message, this.folderId)
                    this.pushErrorNotification('Загрузка файлов прошла неуспешно. ' + data.message)
                }
                else {
                    console.log('Loading files successfull ', this.folderId);
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
                console.log('Loading files unsuccessfull ', this.folderId);
                this.pushErrorNotification('Загрузка файлов прошла неуспешно.')
            });

    }

    //menu
    createfolder(form: NgForm) {
        this.homeService.createfolder(this.model.foldername, this.folderId)
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
                this.loadFolders();
                form.resetForm();
            },
            error => {
                console.log('Cant create folder', error);
                this.closeCreateFolderModal.nativeElement.click();
                this.pushErrorNotification('Создание папки прошло неуспешно.')
                form.resetForm();
            });
    }

    uploadFile() {
        let fi = this.inputfiles.nativeElement;
        for (var _i = 0; _i < fi.files.length; _i++) {

            this.loading = true;
            if (this.checkIfValid(fi.files[_i]) == "") {
                let formData: FormData = new FormData();
                formData.append('FileContent', fi.files[_i]);
                formData.append('CreationDate', fi.files[_i].lastModifiedDate.toUTCString());
                formData.append('ParentFolderId', this.folderId);
                formData.append('Tags', this.uploadFiles[_i].hashtag ? this.uploadFiles[_i].hashtag : "");
                let creationDate = new Date(fi.files[_i].lastModifiedDate);

                this.homeService.uploadFile(formData)
                    .subscribe(
                    data => {
                        this.loading = false;
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
                        this.loadFiles();
                    },
                    error => {
                        this.loading = false;
                        console.log('Cant upload file', error);
                        this.closeUploadFileModal.nativeElement.click();
                        this.pushErrorNotification('Загрузка файла прошла неуспешно.')
                    });
            }
        }
    }

    //folders
    renamefolder(form: NgForm) {
        let folderId = this.selectedObjectId;
        console.log(this.folderrenamem.name, folderId);
        this.homeService.renameFolder(this.folderrenamem.name, folderId)
            .subscribe(
            data => {
                if (!data.success && data.message) {
                    console.log(data.message)
                    this.pushErrorNotification('Переименование папки прошло неуспешно. ' + data.message)
                }
                else {
                    this.pushSuccessNotification('Переименование папки прошло успешно.')
                    console.log('Renaming folder successfull for ', folderId);
                }
                this.closeRenameFolderModal.nativeElement.click();
                this.loadFolders();
                form.resetForm();
            },
            error => {
                this.loadFolders();
                this.closeRenameFolderModal.nativeElement.click();
                console.log('Cant rename folderfor ', folderId);
                this.pushErrorNotification('Переименование папки прошло неуспешно.')
                form.resetForm();
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
                }
                this.closeDeleteFolderModal.nativeElement.click();
                this.loadFolders();
            },
            error => {
                this.closeDeleteFolderModal.nativeElement.click();
                console.log('Cant delete folder');
                this.pushErrorNotification('Удаление папки прошло неуспешно.')
            });
    }

    addTags(form: NgForm) {
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
                }
                this.closeAddTagFolderModal.nativeElement.click();
                this.loadFolders();
                form.resetForm();
            },
            error => {
                this.closeAddTagFolderModal.nativeElement.click();
                console.log('Cant add tags');
                this.pushErrorNotification('Добавление тегов прошло неуспешно.')
                form.resetForm();
            });
    }

    //files
    renameFile(form: NgForm) {
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
                }
                this.closeRenameFileModal.nativeElement.click();
                this.loadFiles();
                form.resetForm();
            },
            error => {
                this.closeRenameFileModal.nativeElement.click();
                console.log('Cant rename file for ', fileId);
                this.pushErrorNotification('Переименование файла прошло неуспешно.')
                form.resetForm();
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
                }
                this.closeDeleteFileModal.nativeElement.click();
                this.loadFiles();
            },
            error => {
                this.closeDeleteFileModal.nativeElement.click();
                console.log('Cant delete file');
                this.pushErrorNotification('Удаление файла прошло неуспешно.')
            });
    }

    addTagsFile(form: NgForm) {
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
                }
                this.closeAddTagFileModal.nativeElement.click();
                this.loadFiles();
                form.resetForm();
            },
            error => {
                this.closeAddTagFileModal.nativeElement.click();
                console.log('Cant add tags');
                this.pushErrorNotification('Добавление тегов прошло неуспешно.')
                form.resetForm();
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
        this.selectedObjectId = folderId;
        this.homeService.downloadZIP(folderId)
            .subscribe(
            data => {
                console.log('Download zip successfull');
                var fileExtension = data.type.substring(data.type.lastIndexOf("/") + 1, data.type.length);
                var filename = 'file.' + fileExtension;
                saveAs(data, this.folders[this.getIfromId(folderId)].name + '.' + fileExtension);
            },
            error => {
                console.log('Cant download');
                this.pushErrorNotification('Скачивание zip прошло неуспешно.')
            });
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
                for (let file of this.files) {
                    if (this.checkIfJpg(file.name) == true) {
                        file.resizedImage = 'data:image/jpg;base64,' + file.resizedImage;
                    }
                    else {
                        file.resizedImage = 'data:image/png;base64,' + file.resizedImage;
                    }
                    
                }
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

    onChange(files: any[]) {
        this.uploadFiles = files;
    }

    checkIfImage(name: string) {
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
    }

    checkIfValid(file: any): string {
        var fileExtension = "";
        if (file.name.lastIndexOf(".") > 0) {
            fileExtension = file.name.substring(file.name.lastIndexOf(".") + 1, file.name.length);
        }
        if (!(fileExtension.toLowerCase() == "jpg" || "png" || "mov" || "avi" || "mkv")) {
            return "Тип файла не поддерживается"
        } else if
            (!(file.size < 50000000)) {
            return "Размер файла превышает 50MB"
        } else if
            (!(file.name.length < 50)) {
            return "Имя файла больше 50 символов";
        } else {
            return "";
        }
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
        this.notificationsService.success('Ура!', message, options);
    }

    pushErrorNotification(message: string, options?: any) {
        this.notificationsService.error('Упс!', message, options);
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
