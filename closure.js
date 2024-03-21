//Defination : A closure is javascript concept, where we combine the function with lexical scope. it refers to the combination of a function and the lexical environment within which that function was declared.
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

//Example - 2

const employee = (name,addrss,phone) => {
    return {
        getName: () => {
            return name
        },
        getPhone: () => {
            return phone
        },
        getAddress: () => {
            return addrss
        }
    }
}

const user = employee('Sanu','Delhi','867654354')
console.log(user.getName())