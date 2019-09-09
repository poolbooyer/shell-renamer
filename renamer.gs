function myFunction() {
  var Rfolder=DriveApp.getFolderById("");
  var folders = Rfolder.getFolders();
  var folder;
  while(folders.hasNext()){
    folder=folders.next();
    if(folder.getName()=="base-data"){
      var child=folder.getId();
      break;
    }
  }
  var Cfolder=DriveApp.getFolderById(child);
  var folders = Cfolder.getFolders();
  var folder;
  var isFolder=new Boolean(false);
  while(folders.hasNext()){
    folder=folders.next();
    if(folder.getName()=="changed"){
      isFolder=Boolean(true);
      break;
    }
  }
  if(isFolder==false){
    var res=Cfolder.createFolder("changed");
  }
  var folders = Cfolder.getFolders();
  while(folders.hasNext()){
    folder=folders.next();
    if(folder.getName()=="changed"){
      var target=folder.getId();
      break;
    }
  }
  var Tfolder=DriveApp.getFolderById(target);
  var files = Cfolder.getFiles();
  var file;
  while(files.hasNext()) {
    file = files.next();
    var fID=file.getName().substr(3,3);
    var fname=fID+"doc.html";
    var result=file.makeCopy(fname, Tfolder)
  }
  
}

