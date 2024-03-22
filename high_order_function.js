//forEach
//map
//sort
//filter
//reduce

const companies = [
    { name: "Google",category:"Product Based",start: 1990},
    { name: "TCS",category:"Service Based",start: 1992},
    { name: "Flipkart",category:"Product Based",start: 1993},
    { name: "Netflix",category:"Product Based",start: 1991},
    { name: "Infosys",category:"Service Based",start: 1997},
    { name: "Mindtree",category:"Service Based",start: 1994},
]

const ages = [23,45,21,78,44,90,11,56,32,86,71,89]

//forEach  - Its not return anything

companies.forEach((company) => {
    console.log(company.name)
})

//Map - Its return an new array

const newData1 = companies.map((company,index) => company.name)
// const newData2 = ages.map((age,index) => age*2)
// console.log(newData1)

//Sort - Its return an new array
const newData2 = companies.sort((a,b) => a.start < b.start ? 1 : -1)
// const newData = ages.sort((a,b) => (b-a)) //Deseceding Order

// console.log(newData)

//Filter - Its return a new array
const newData3 = companies.filter((company) => company.category === 'Product Based')
// const newData = ages.filter((age) => age > 80 )
// console.log(newData)

// reduce : its return a calculated value or sinle final output

const newData4 = ages.reduce((total,age) => total+age,0)
// console.log(newData)

