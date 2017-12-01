export class Folder {
    folderId: string;
    ownerId: string;
    parentFolderId: string;
    name: string;
    creationDate: Date;
    uploadDate: Date;
    level: Int32Array;
    hasPublicAccess: boolean;
    tagList: string[];
}