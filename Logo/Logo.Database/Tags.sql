CREATE TABLE [dbo].[Tags]
( 
    [TagID]   uniqueidentifier NOT NULL DEFAULT newid() PRIMARY KEY,
	[Name] nvarchar(200)
)
