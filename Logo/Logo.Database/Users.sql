CREATE TABLE [dbo].[Users]
(
	[UserID] uniqueidentifier NOT NULL DEFAULT newid() PRIMARY KEY,
	[Name] nvarchar(50) NOT NULL,
	[Password] nvarchar(32) NOT NULL,
	[Email] nvarchar(254) NOT NULL

	CONSTRAINT UC_User UNIQUE (Email,UserID)
)
