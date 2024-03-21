const obj1 = {
    name: "Ram",
    city: "Delhi",
    getName: function () {
        console.log(this.name)
    }
}

const obj2 = {
    phone: "8213266232",
    __proto__:obj1
}

const obj3 = {
    desgination: "software engineer",
    __proto__:obj2
}

// obj2.prototype = obj1

//console.log(obj3)

Array.prototype.myFunction = function () {
    console.log('My custom function')
}

const arr = [1,2,3,45]

console.log(arr.myFunction())

