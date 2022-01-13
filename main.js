let employees = [
  {name: 'John', salary: 90000, hireDate: "July 1, 2010"},
  {name: 'David', salary: 75000, hireDate: "August 15, 2009"},
  {name: 'Ana', salary: 80000, hireDate: "December 12, 2011"}
];

// for(let i = 0; i < employees.length; i++){
//    console.log(employees[i]);
// }

// Array forEach()
// Funcion de orden mayor
// employees.forEach((employee, index) => console.log(employee.name, index))

// Array filter, es una función mayor también, crea un nuevo array
// const highTier = employees.filter(employee => employee.salary > 75000)
// console.log(employees, highTier)

// Array map
// const uppercase = employees.map(function(employee) {
//   return employee.name.toLocaleUpperCase()
// })
// const employeesTier = employees.map(function(employee){
//   return {
//     name: employee.name,
//     tier: employee.salary > 75000 ? 'high' : 'mid'
//   }
// })
// console.log(employees, uppercase)
// console.log(employeesTier)

// Array sort
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sort(function(num1, num2){
//   return num2 - num1
//   // if(num1 < num2) return 1
//   // else if(num1 > num2) return -1
//   // else return 0
// })

// const sortedEmployees = [...employees].sort((a, b) =>  b.salary - a.salary)
// console.log(employees, sortedEmployees)


// Array reduce
// const total = [1, 2, 3, 4, 5, 6, 7].reduce(function(total, current){
//   console.log(total, current)
//   return total + current
// })
// console.log(total)
// const totalSalaries = employees.reduce((total, current) => total + current.salary, 0)
// console.log(totalSalaries)

// Method chaining
// const totalHightier = employees
//   .map(employee => employee.salary)
//   .filter(salary => salary > 75000)
//   .reduce((total, current) => total + current)

// console.log(totalHightier)
