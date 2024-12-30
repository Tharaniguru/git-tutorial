// async function printname(params) {
//     console.log(params)
// }
// fun = async (params) => {
//     console.log(params)
// }

// printname("tharani")
// fun('tharu')


// fun2 = async () => {
//     return 'hi'
// }

// a=fun2()
// console.log(a)
// console.log(fun2())


// fun3 = async () => {
//     setTimeout(() => {
//         return 'hi'
//     }, 2000);
    
// }
// console.log(fun3())


fun4 = async () => {
    var a="this is await"
    return a
}

a=fun4()
console.log(a)


fun4().then((a)=>
{
    console.log(a)
})
