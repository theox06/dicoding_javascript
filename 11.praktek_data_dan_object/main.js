const employees = [
    {
        name: 'Fulan',
        email: 'fulan@dicoding.com',
        joinYear: 2020
    },
];




function addEmployee(name, email, joinYear){
    employees.push({name, email, joinYear});
    console.log(employees);
}

const newEmployee = addEmployee("Bambang", "bambang@dicoding.com", 2020);
const newEmployee2 = addEmployee("Ipoel", "ipoel@dicoding.com", 2020);
console.log(newEmployee);
