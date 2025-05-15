// object
const obj1 = { data_center : 'IDN-Bogor 1' };
const obj2 = { server_status : 'online', address : 'Jl.pajajaran no.23 Bogor' };
const newObj = {...obj1, ...obj2};
console.log(newObj);

// array
const array1 = ['TRISTAR'];
const array2 = ['Jakarta', 'Jl.Slipi no.35'];
const newArray = [...array1, ...array2];

console.log(newArray);