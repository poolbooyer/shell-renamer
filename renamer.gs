function myFunction() {
  var Rfolder=DriveApp.getFolderById("171IOaqui9mVk2tyFURQqTIK8pEsSUInC");
  var folders = Rfolder.getFolders();
  var folder;
  while(folders.hasNext()){
    folder=folders.next();
    if(folder.getName()=="base-data"){
      var target=folder.getId();
      break;
    }
  }
  var Tfolder=DriveApp.getFolderById(target);
  var files = Tfolder.getFiles();
  var file;
  while(files.hasNext()) {
    file = files.next();
    Logger.log(file);
  }
  
}

