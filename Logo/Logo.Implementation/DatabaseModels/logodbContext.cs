using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;



namespace Logo.Implementation.DatabaseModels
{
    public partial class LogodbContext : DbContext
    {
        public virtual DbSet<File> Files { get; set; }
        public virtual DbSet<FilesToTags> FilesToTags { get; set; }
        public virtual DbSet<FilesToUsers> FilesToUsers { get; set; }
        public virtual DbSet<Folder> Folders { get; set; }
        public virtual DbSet<FoldersToTags> FoldersToTags { get; set; }
        public virtual DbSet<FoldersToUsers> FoldersToUsers { get; set; }
        public virtual DbSet<Tag> Tags { get; set; }
        public virtual DbSet<User> Users { get; set; }


        public string _connectionString;

        public LogodbContext()
        {
        }

        public LogodbContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        public LogodbContext(DbContextOptions<LogodbContext> options)
            : base(options)
        {     
        }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            
            if (_connectionString != null)
            {
                optionsBuilder.UseSqlServer(_connectionString);
            }

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<File>(entity =>
            {
                entity.HasKey(e => e.FileId);

                entity.Property(e => e.FileId)
                    .HasColumnName("FileID")
                    .HasDefaultValueSql("(newid())");

                entity.Property(e => e.CreationDate).HasColumnType("datetime");

                entity.Property(e => e.ImageStorage).HasMaxLength(2000);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.OwnerId).HasColumnName("OwnerID");

                entity.Property(e => e.ParentFolderId).HasColumnName("ParentFolderID");

                entity.Property(e => e.UploadDate).HasColumnType("datetime");

                entity.HasOne(d => d.Owner)
                    .WithMany(p => p.Files)
                    .HasForeignKey(d => d.OwnerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Files__OwnerID__05D8E0BE");

                entity.HasOne(d => d.ParentFolder)
                    .WithMany(p => p.Files)
                    .HasForeignKey(d => d.ParentFolderId)
                    .HasConstraintName("FK__Files__ParentFol__04E4BC85");
            });

            modelBuilder.Entity<FilesToTags>(entity =>
            {
                entity.HasKey(e => new { e.FileId, e.TagId });

                entity.Property(e => e.FileId).HasColumnName("FileID");

                entity.Property(e => e.TagId).HasColumnName("TagID");

                entity.HasOne(d => d.File)
                    .WithMany(p => p.FilesToTags)
                    .HasForeignKey(d => d.FileId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__FilesToTa__FileI__07C12930");

                entity.HasOne(d => d.Tag)
                    .WithMany(p => p.FilesToTags)
                    .HasForeignKey(d => d.TagId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__FilesToTa__TagID__75A278F5");
            });

            modelBuilder.Entity<FilesToUsers>(entity =>
            {
                entity.HasKey(e => new { e.FileId, e.UserId });

                entity.Property(e => e.FileId).HasColumnName("FileID");

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.File)
                    .WithMany(p => p.FilesToUsers)
                    .HasForeignKey(d => d.FileId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__FilesToUs__FileI__06CD04F7");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.FilesToUsers)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__FilesToUs__UserI__5EBF139D");
            });

            modelBuilder.Entity<Folder>(entity =>
            {
                entity.HasKey(e => e.FolderId);

                entity.Property(e => e.FolderId)
                    .HasColumnName("FolderID")
                    .HasDefaultValueSql("(newid())");

                entity.Property(e => e.CreationDate).HasColumnType("datetime");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.OwnerId).HasColumnName("OwnerID");

                entity.Property(e => e.ParentFolderId).HasColumnName("ParentFolderID");

                entity.Property(e => e.UploadDate).HasColumnType("datetime");

                entity.HasOne(d => d.Owner)
                    .WithMany(p => p.Folders)
                    .HasForeignKey(d => d.OwnerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Folders__OwnerID__60A75C0F");

                entity.HasOne(d => d.ParentFolder)
                    .WithMany(p => p.InverseParentFolder)
                    .HasForeignKey(d => d.ParentFolderId)
                    .HasConstraintName("FK__Folders__ParentF__5FB337D6");
            });

            modelBuilder.Entity<FoldersToTags>(entity =>
            {
                entity.HasKey(e => new { e.FolderId, e.TagId });

                entity.Property(e => e.FolderId).HasColumnName("FolderID");

                entity.Property(e => e.TagId).HasColumnName("TagID");

                entity.HasOne(d => d.Folder)
                    .WithMany(p => p.FoldersToTags)
                    .HasForeignKey(d => d.FolderId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__FoldersTo__Folde__76969D2E");

                entity.HasOne(d => d.Tag)
                    .WithMany(p => p.FoldersToTags)
                    .HasForeignKey(d => d.TagId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__FoldersTo__TagID__778AC167");
            });

            modelBuilder.Entity<FoldersToUsers>(entity =>
            {
                entity.HasKey(e => new { e.FolderId, e.UserId });

                entity.Property(e => e.FolderId).HasColumnName("FolderID");

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.Folder)
                    .WithMany(p => p.FoldersToUsers)
                    .HasForeignKey(d => d.FolderId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__FoldersTo__Folde__619B8048");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.FoldersToUsers)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__FoldersTo__UserI__628FA481");
            });

            modelBuilder.Entity<Tag>(entity =>
            {
                entity.HasKey(e => e.TagId);

                entity.Property(e => e.TagId)
                    .HasColumnName("TagID")
                    .HasDefaultValueSql("(newid())");

                entity.Property(e => e.Name).HasMaxLength(200);
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.UserId);

                entity.HasIndex(e => new { e.Email, e.UserId })
                    .HasName("UC_User")
                    .IsUnique();

                entity.Property(e => e.UserId)
                    .HasColumnName("UserID")
                    .HasDefaultValueSql("(newid())");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(254);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(32);
            });
        }
    }
}
