//With the help of prototype we can acheive inheritace in javascript

const object = {
    name: "Sanu",
    city: "Bangalore",
    phone: "54556454",
    getInfo: function () {
        console.log(`${this.name}  from  ${this.city}`)
    }
}

const object2 = {
    name: "Kumar",
    city: "Patna",
    __proto__:object
}

// object2.__proto__ = object

console.log(object2.getInfo())
