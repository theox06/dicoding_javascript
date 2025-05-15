// membuat object
const getData = {};
const getInfo = {uuid : '17621f8e-b684-4ea2-96c3-f37b13b1ffc2', provider: 'TRISTAR IT CORP', version: 1.0, status: 'Stable-Public'};

// mengakses properti di object
// menggunakan dot notation
// console.log(getInfo.uuid);

// menggunakan square bracket
// console.log(getInfo['uuid']);

// menggunakan object destructuring
const{uuid, provider} = getInfo;
// console.log(uuid, provider);

// mengubah nilai di properti object
const accountStatus = {
    username : 'ADMIN',
    loginStatus : false
}

accountStatus.loginStatus = true;
// console.log(accountStatus.loginStatus);


// menghapus properti di object
const confidential = {
    uuid : '2561243f-2537-46bf-b26c-5ccb81148f74',
    content : 'Your elder sister is adorable',
}

delete confidential.content;
console.log(confidential);



// menstrukturkan data dengan array

// menggunakan object constructor
const getSys = new Array();
const getCpuArch = new Array(64);

// menggunakan sintaks Array.from
const getStorSizeInfo = Array.from('128 GB');
// console.log(getStorSizeInfo);


// menggunakan array literal 
const array = [];
const branch = ['TRISTAR HUB Bogor', 'TRISTAR HUB Jakarta', 'TRISTAR SERVER HUB Bandung', 'TRISTAR SERVER HUB Tegal', 'TRISTAR SERVER HUB Semarang', 'TRISTAR SERVER HUB Yogyakarta', 'TRISTAR SERVER HUB Malang', 'TRISTAR SERVER HUB Surabaya', 'TRISTAR SERVER HUB Denpasar Bali', 'TRISTAR SERVER HUB Sulawesi', 'TRISTAR SERVER HUB Sumatera', 'TRISTAR SERVER HUB Kalimantan', 'TRISTAR SERVER HUB NTT & NTB', 'TRISTAR SERVER HUB ']

// mengakses element array
const cpuList = ['Intel x86_64', 'AMD64', 'ARM64'];
// console.log(cpuList[1]);


// manipulasi nilai array

// menggunakan indexing
const securityPatch = ['01 February 2025 (MacroVision Guard 2.0)', '01 March 2025 (MacroVision Guard 2.5)', '01 April 2025 (MacroVision 2.5 Super)'];
securityPatch[2] = 'This is april fool!';

// menggunakan push
securityPatch.push('01 May 2025 (MacroVision Guard 3.0)');
// console.log(securityPatch);


// menghapus element dan data array


const maleCharacter = ['M Erza Farandi (As Ipul)', 'Wysis Hero (As Eko)', 'M Ghazali Rahmat (As Taufik or Opik)'];
// menggunakan keyword delete
// delete mainCharacter[0];
// menggunakan metode splice
// mainCharacter.splice(0,1);

// console.log(mainCharacter);


const makeUpTeam = ['Aura Firly', 'Gina Faturahmawati', 'Adzkia Zahra Fadhilla', 'Putri Alzahra Apriliyanti', 'Saffana Nursalma Puji Kurnia', 'Felisia Riani'];
// menggunakan shift 
// makeUpTeam.shift();

// menggunakan pop
makeUpTeam.pop();
// console.log(makeUpTeam);


// Array Destructuring

const femaleCharacter = ['Jeconia Callysta Setio Halim (as Main Character)', 'Casting as Vania'];
const [name, casting] = femaleCharacter;
// console.log(casting);



// Map

// menyimpan nilai di map
const seriesList = new Map();
seriesList.set('Title :' , 'The Rescue Squad (S1E01)');

// mengakses nilai di map
// console.log(seriesList.get('Title :'));

// menstrukturkan data dengan set

// menyimpan nilai di set

// cara pertama
// const cpuClockSet = new Set();
// cpuClockSet.add(1.8);
// cpuClockSet.add(2.5);
// cpuClockSet.add(3.95);

// cara kedua
// const cpuClockSet = new Set([1.8, 2.5, 3.0, 4.0]);
// console.log(cpuClockSet);


// mengakses nilai di set


const id = new Set();
id.add(1);
id.add(2);

// menggunakan for
// for (const number of id) {
//     console.log(number);
// }

// menggunakan foreach
// id.forEach((value) => console.log(value));

// mengahapus nilai di 
id.delete(1);
// console.log(id);




// spread operator

// spread operator on object
const obj1 = {username : 'Admin'};
const obj2 = {role : 'L1', branchId : 120};
const newObj = {...obj1, ...obj2};
console.log(newObj);

// spread operator on array
const array1 = ['TRISTAR'];
const array2 = ['Indonesia', 'Jl. MT.Haryono no.38, Jaktim'];
const newArray = [...array1, ...array2];

console.log(newArray);

// console.log(seriesList);


// rest operator

function myFunc(...manyMoreArgs) {
    console.log('manyMoreArgs', manyMoreArgs);
}

myFunc('one', 'two', 'three');



