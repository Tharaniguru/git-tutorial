arr=[1,2,3,4]
arr.forEach((element,index) => {
    console.log("the element is ",element,"and index is ",index)
});



obj={
    'name':'tharani',
    'age':'20'
}

for(var a in obj){
    console.log(a)

    console.log(obj[a])
}
// obj.forEach((key,value)=>{
//     console.log("key : ",key," Value : ",value)
// })

//for each will not 