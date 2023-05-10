var userModel = require('./userModel');
var key = '123456789trytryrtyr';
var encryptor = require('simple-encryptor')(key);

module.exports.createUserDBService = (userDetails) => {


   return new Promise(function myFn(resolve, reject) {

       var userModelData = new userModel();

       userModelData.name = userDetails.name;
       userModelData.email = userDetails.email;
       userModelData.password = userDetails.password;
       userModelData.streetaddress = userDetails.streetaddress;
       userModelData.city = userDetails.city;
       userModelData.region = userDetails.region;
       userModelData.postalcode = userDetails.postalcode;
       userModelData.usertype = userDetails.usertype;
       var encrypted = encryptor.encrypt(userDetails.password);
       userModelData.password = encrypted;

       userModelData.save(function resultHandle(error, result) {

           if (error) {
               reject(false);
           } else {
               resolve(true);
           }
       });

   });

}

module.exports.loginuserDBService = (userDetails)=> 
{
   return new Promise(function myFn(resolve, reject) 
   {
      userModel.findOne({ email: userDetails.email},function getresult(errorvalue, result)
      {
         if(errorvalue)
         {
            reject({status: false, msg: "Invaild Data"});
         }
         else
         {
            if(result !=undefined &&  result !=null)
            {
               var decrypted = encryptor.decrypt(result.password);

               if(decrypted== userDetails.password)
               {
                  resolve({status: true,msg: "user Validated Successfully"});
               }
               else
               {
                  reject({status: false,msg: "user Validated failed"});
               }
            }
            else
            {
               reject({status: false,msg: "user Error Details"});
            }

         }
      
      });
      
   });
}