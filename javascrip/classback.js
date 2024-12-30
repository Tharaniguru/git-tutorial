databaseSharing = ()=>{
    console.log("data stored  successfully");
}


submitform = (msg,dbs)=>{
    
    console.log(msg);
    dbs();
    
}
submitform("form submitted successfully",databaseSharing)
