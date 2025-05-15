
// membuat array dengan object constructor
const users = new Array();
const vramSize = new Array(1024);

// membuat array dengan Array.from
const tristar = Array.from('TRISTAR');
console.log(tristar);

// menggunakan array literal
const array = [];
const studioHall = ['Aruna Hall (0001 - 0010)', 'Arjuna Hall (0011 - 0020)'];

// mengakses element array
console.log(studioHall[0]);

// manipulasi nilai array

const displayMode = ['(SD) 480I @60Hz', '(HD) 720I @30Hz', '(HD) 720P @60Hz', '(FHD) 1080I @60HZ', '(FHD) 1080P @60Hz'];
// menggunakan indexing
displayMode[0]  = '(SD) 480P @50Hz';
console.log(displayMode);

const clientOs = ['Windows x64 (Windows 10/11)', 'Linux (Ubuntu, Linux Mint, Debian, Kali Linux, etc...)', 'Mac OS'];
// menggunakan push
clientOs.push('Android (Android 9)', 'iOS (iOS 12)');
console.log(clientOs);


// menghapus element dan data array

const paymentMethod = ['(Midtrans) Virtual Account', 'QRIS', 'Debit/Credit Card'];
const snapboxMethod = ['(Midtrans) Official Payment Gateway Snapbox', '(Midtrans) Email', 'Whatsapp Snapbox'];
// menghapus data array menggunakan keyword delete
delete snapboxMethod[2];
console.log(paymentMethod);
console.log(snapboxMethod);

// menghapus data array menggunakan splice
const tristarDigiSchApi = ['TRDS DB-API', 'TRDS CRUD-METHOD', 'TRDS MIDTRANS-OPERATOR', 'TRDS SERVER-CONNECTX'];
tristarDigiSchApi.splice(0,1);
// keterangan
// 0 : titik awal (dimulai dari indeks 0)
// 2 : jumlah data yang ingin di hapus
console.log(tristarDigiSchApi);

// menggunakan shift dan pop
const virtualAccountMethod = ['Bank BCA', 'Bank Mandiri', 'Bank BNI', 'Bank BRI', 'Bank BSI', 'Bank CIMB Niaga', 'Bank Maybank'];
// menggunakan shift (menghapus element pertama nya saja)
virtualAccountMethod.shift();
console.log(virtualAccountMethod);

const gatewayTokenMethod = ['RFID Card', 'Qr-Code', 'Phone NFC', 'RFID Bracelet'];
gatewayTokenMethod.pop();
// menggunakan pop (menghapus element terakhir nya saja)
console.log(gatewayTokenMethod);

// Array Destructuring
const getStudentData = ['Name :' , 'Fransiskus Benedictus Gawi Rebong'];
// menggunakan array destructuring
const [nameLabel, nameValue] = getStudentData;
console.log(nameLabel, nameValue);



