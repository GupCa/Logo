CREATE TABLE [dbo].[FilesToUsers]
(
	[FileID] uniqueidentifier FOREIGN KEY REFERENCES Files(FileID),
	[UserID] uniqueidentifier FOREIGN KEY REFERENCES Users(UserID),
	CONSTRAINT FileUserKey PRIMARY KEY ([FileID], [UserID])
)
