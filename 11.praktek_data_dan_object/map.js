// menyimpan nilai di map
const map = new Map();
map.set('Petugas Jaga :', 'M Erza Farandi');
console.log(map);

// mengakses nilai di map
const getAdminIt = new Map();
getAdminIt.set('Petugas Jaga :', 'M Erza Farandi');
console.log(getAdminIt.get('Petugas Jaga :'));

// menghapus nilai di map
const petugasServer = new Map();
petugasServer.set('Petugas Server :', 'Gregori Paul S');
petugasServer.set('Status :', 'Sedang bertugas');
petugasServer.delete ('Status :');
console.log(petugasServer);