﻿using System;
using System.Security.Cryptography;

using Logo.Contracts.Services;
using System.Text;

namespace Logo.Implementation
{
    public class CryptographyService : ICryptographyService
    {

        public string RSAEncryptData(string originalString)
        {
            UnicodeEncoding ByteConverter = new UnicodeEncoding();
            byte[] dataToEncrypt = ByteConverter.GetBytes(originalString);
            byte[] encryptedData;

            /*  
             *  We  need  assign  own RSA  key  for  retrive  information  with   generated  values  earlier
              RSAParameters rsap = new RSAParameters();                
              rsap.Exponent = ByteConverter.GetBytes("5");
              rsap.Modulus = ByteConverter.GetBytes("21");
              rsap.D = ByteConverter.GetBytes("17");
              */

            using (RSACryptoServiceProvider RSA = new RSACryptoServiceProvider())
            {
                //RSA.ImportParameters(rsap);

                encryptedData = RSAEncrypt(dataToEncrypt, RSA.ExportParameters(false), false);
            }

            return ByteConverter.GetString(encryptedData);

        }

        public byte[] RSAEncrypt(byte[] DataToEncrypt, RSAParameters RSAKeyInfo, bool DoOAEPPadding)
        {
            try
            {
                //Create a new instance of RSACryptoServiceProvider.
                RSACryptoServiceProvider RSAalg = new RSACryptoServiceProvider();

                //Import the RSA Key information. This only needs
                //toinclude the public key information.
                RSAalg.ImportParameters(RSAKeyInfo);

                //Encrypt the passed byte array and specify OAEP padding.  
                //OAEP padding is only available on Microsoft Windows XP or
                //later.  
                return RSAalg.Encrypt(DataToEncrypt, DoOAEPPadding);
            }
            //Catch and display a CryptographicException  
            //to the console.
            catch (CryptographicException e)
            {
                Console.WriteLine(e.Message);

                return null;
            }
        }

        public byte[] RSADecrypt(byte[] DataToDecrypt, RSAParameters RSAKeyInfo, bool DoOAEPPadding)
        {
            try
            {
                //Create a new instance of RSACryptoServiceProvider.
                RSACryptoServiceProvider RSAalg = new RSACryptoServiceProvider();

                //Import the RSA Key information. This needs
                //to include the private key information.
                RSAalg.ImportParameters(RSAKeyInfo);

                //Decrypt the passed byte array and specify OAEP padding.  
                //OAEP padding is only available on Microsoft Windows XP or
                //later.  
                return RSAalg.Decrypt(DataToDecrypt, DoOAEPPadding);
            }
            //Catch and display a CryptographicException  
            //to the console.
            catch (CryptographicException e)
            {
                Console.WriteLine(e.ToString());

                return null;
            }
        }

    }
}
