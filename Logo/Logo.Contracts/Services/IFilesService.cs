﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace Logo.Contracts.Services
{
    public interface IFilesService
    {
         Task<byte[]> SimpleDownloadAsync(string fileName);
         Task SimpleUploadStreamAsync(LoadedFileBack loadedFileBack);
         Task<IEnumerable<byte[]>> DownloadFiles(IEnumerable<string> fileNames);
         Task UploadFiles(IEnumerable<LoadedFileBack> loadedFilesBack);

         byte[] ResizeImage(Stream input);

    }
}
