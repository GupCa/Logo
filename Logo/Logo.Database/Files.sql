CREATE TABLE [dbo].[Files]
(
	[FileID] uniqueidentifier NOT NULL  DEFAULT newid() PRIMARY KEY,
	[ParentFolderID] uniqueidentifier  FOREIGN KEY REFERENCES Folders(FolderID),
	[OwnerID] uniqueidentifier FOREIGN KEY REFERENCES Users(UserID) NOT NULL,
	[Name] nvarchar(50) NOT NULL,
	[CreationDate] datetime,
	[UploadDate] datetime,
	[Size] int,
	[Type] int NOT NULL,
	[HasPublicAccess] bit DEFAULT 0 NOT NULL, 
    [ImageStorage] VARBINARY(MAX) NULL
)
