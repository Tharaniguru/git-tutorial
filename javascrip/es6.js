
//arrow function
 
fun1_name = (names) =>{
    return names[1];
}
console.log(fun1_name(["tharani,swathi",'tharu','thar','thari']));



//destructing operators
var mark=[0,2,4,5]
var [m1,m2,m3,m4]=mark
console.log(m3)


//ternary operator
a=10
out = (a%2==0)? "even" :"odd"
console.log(out)


//spread operator

old=['thar','swa','swe']
newnames=['vishnu','radha','sowmi']

all=[...old,...newnames]


console.log(all)

new2names=['vishnu','radha','sowmi',...old]
arr=[...old,newnames]
console.log(arr)
console.log(new2names)

//rest operator
function restop(...arr1){
    console.log(arr1)
}
restop( 1,2,3,4,"tharr")

//hoisting

console.log(t) // output : undefined
var t=5
console.log(t)

