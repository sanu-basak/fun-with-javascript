//Defination : A closure is javascript concept, where we combine the function with lexical scope. 
// - This makes them very useful for things like callbacks, maintaining state, and creating private variables in JavaScript.


//Example - 1
const x = () => {
    let a = 'Hello World'
    const y = () => {
        console.log(a)
    }
    return y
}

const z = x()
console.log(z())