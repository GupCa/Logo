CREATE TABLE [dbo].[FoldersToTags]
(	
	[FolderID] uniqueidentifier FOREIGN KEY REFERENCES [Folders](FolderID),
	[TagID]  uniqueidentifier FOREIGN KEY REFERENCES Tags(TagID),
	CONSTRAINT FolderTagKey PRIMARY KEY (FolderID, TagID)
)
