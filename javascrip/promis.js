//Location finder

locationfinder =()=>{
    train = 8
    return new Promise((resolve,reject)=>{
        if(train==7){
            resolve("train has arrived")
        }
        else{
            reject("train is not arrived")
        }
    })
}

locationfinder().then((resolvemsg)=>{
    console.log(resolvemsg)
}).catch((rejectmsg)=>{
    console.log(rejectmsg)
})