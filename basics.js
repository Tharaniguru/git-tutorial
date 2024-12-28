var a=10;
var b='10'
if(a==b){
    console.log("both have same value");

if(a===b){
    console.log("both have same datatype");
}
else{
    console.log("both have different datatype");
}
}
else{
    console.log("both are diff values");
}

obj={
    "name":'tharani',
    "age" : "20",
}

obj1={}
obj2= new Object()
obj3={}
obj3['name']='thar';
obj3['age']='20';

console.log(obj3)
console.log(obj3['name'])
console.log(obj3.name)

for (var a in obj3){    // object is not iteratable
    console.log(a)
}    




// arithmetic operators

var a=5;
var b=6;
var c=5;

console.log(a+b)    // arithmetic operators
console.log(a++)    // increment operator
console.log(a==b)   //relational operator or comparision operator
console.log(a===c)
console.log(a>>b)   // bitwise operator


