var fileName = "/var/mobile/Applications/39BFC918-E086-4FEF-9AE4-A1009CD477D9/Documents/example/site.zip"
       var destination = "/var/mobile/Applications/39BFC918-E086-4FEF-9AE4-A1009CD477D9/Documents/example"

       
    try{ 
    //  alert(1);
    var AdmZip = require('adm-zip');
   // alert(AdmZip);
      // reading archives
    var zip = new AdmZip(fileName);
   //  alert(zip);
    var zipEntries = zip.getEntries(); // an array of ZipEntry records

    zipEntries.forEach(function(zipEntry) {
        console.log(zipEntry.toString()); // outputs zip entries information
        if (zipEntry.entryName == "index.html") {
             console.log(zipEntry.data.toString('utf8')); 
        }
    });
    
    // extracts the specified file to the specified location
 //  alert("Deepak Singh");
   try{
   // alert("INSIDE TRY");
      // extracts everything
    zip.extractAllTo(destination, /*overwrite*/true);
    //alert("After TRY");

   }catch(error){
      //alert(error);
   }

    }catch(error){
      console.log("Error is<><><>" + error);
      ///alert("Error is<><><>" + error);
    }