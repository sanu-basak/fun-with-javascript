//Currying - f(a,b) into f(a)(b)

//Example-1 :  sun(5)(4)(3)(2)(1)
// function sum(a){
//     return (b) => {
//         return (c) => {
//             return a+b+c
//         }
//     }
// }
// console.log(sum(5)(4)(3))

/*Example-2 
    evaluate("sum")(8)(4) => 12
    evaluate("substract")(8)(4) => 4
    evaluate("multi")(8)(4) => 32
    evaluate("divide")(8)(4) => 2
*/

// function evaluate(operation){
//     return (a) => {
//         return (b) => {
//             if(operation == 'sum'){
//                 return a + b
//             }else if(operation == 'substract'){
//                 return a - b
//             }else if(operation == 'multi'){
//                 return a * b
//             }else if(operation == 'divide'){
//                 return a / b
//             }else{
//                 return 'Invalida Operation'
//             }
//         }
//     }
// }

// console.log(evaluate('multi')(8)(2))

//Example 3 - Infinite Currying -> add(1)(2)(3)......(n)
// function add(a){
//     return (b) => {
//         if(b){
//             return add(a+b) 
//         }else{
//             return a
//         }
//     }

// }

// console.log(add(1)(2)(3)(4)(5)(6)(7)())