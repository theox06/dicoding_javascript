/*
Secara umum, operator dalam JavaScript terbagi 
menjadi tiga kelompok: unary, binary, dan ternary. 
Pengelompokan ini berdasarkan jumlah operan yang diperlukan untuk menggunakan 
suatu operator.

Operator aritmetika, seperti + termasuk dalam kelompok operator 
binary karena membutuhkan dua operan. Sementara itu, operator tipe 
data, seperti typeof adalah operator unary karena hanya memerlukan 
satu operan. Adapun operator ternary tentu saja membutuhkan tiga 
operan.
*/

let age = 32;

// unary operator
typeof age;
// keterangan:
// typeof adalah operator
// age adalah operan

// binary operator
5 + 4;
10 / 2;
age = 30;
// keterangan:
// + dan / adalah operator
// 5 dan 4 adalah operan
// 10 dan 2 adalah operan
// age = 30 adalah operan

// Ternary operator (conditional operator)
(age < 18) ? 'You are too young!' : 'Welcome onboard!';
// keterangan
// (age < 18) adalah operator
// 'You are too young!' dan 'Welcome onboard!' adalah operan


// Assigment Operator
/*
Operator penugasan atau assignment operator adalah operator yang 
digunakan untuk memberikan nilai kepada sebuah variabel, baik 
inisiasi nilai baru maupun mengubah nilai yang sudah ada. Operator ini 
ditulis dengan simbol sama dengan (=). Operator penugasan termasuk 
dalam kategori binary operator karena membutuhkan dua operan, 
yaitu variabel di sisi kiri dan nilai yang akan diberikan di sisi kanan. 
Operator ini ditulis di antara kedua operan.
*/

// contoh penggunaan assignment
// digunakan untuk menginisiasi nilai
const name = "PLAZA TRISTAR"
let location = "Jakarta";
// digunakan untuk mengubah nilai
location = "Bogor";

// Arithmetic operator
/*
Operator aritmetika adalah operator standar yang digunakan untuk proses aritmetika, 
seperti penambahan (+), pengurangan (-), pengalian (*), ataupun pembagian (/).
*/
// contoh penggunaan operator aritmatika
// 6 + 5; // mengembalikan 11
// 7 - 2; // mengembalikan 5
// 8 * 5; // mengembalikan 40
// 10 / 3; // mengembalikan 3.33
// 10 % 2; // mengembalikan 0
// 2  (10 + 2); // mengembalikan 24
/*
Catatan
Tanda kurung dalam operasi aritmetika menentukan urutan operasi yang dijalankan. Operasi yang 
diberi tanda kurung akan dikalkulasi terlebih dulu. Hal ini juga merupakan aturan umum 
dalam bidang matematika.
*/

// Comparison operator
/*
Operator perbandingan adalah operator yang digunakan untuk 
membandingkan dua nilai dan mengembalikan nilai boolean (true atau 
false) sebagai hasil perbandingan. Salah satu penggunaan operator 
perbandingan adalah ketika kita berhadapan dengan skenario “Apakah 
x lebih besar dari y?” dan mendapatkan hasil dalam bentuk “Ya” atau 
“Tidak”.
*/

// const a = 10;
// const b = 12;
 
// console.log(a < b); // output: true
// console.log(a > b); // output: false

// Operator Logika
/*
Operator logika digunakan untuk menetapkan logika dari dua nilai 
operan boolean. Dengan operator logika, kita bisa melakukan operasi 
gerbang logika, seperti AND dan OR. Operator logika dapat digunakan 
untuk menetapkan logika yang lebih kompleks.
*/

/*
Berikut adalah contoh kode yang menunjukkan berbagai penggunaan 
operator logika dalam JavaScript.
*/

// AND
// console.log(true && true); // true
// console.log(false && true); // false
// console.log(true && false); // false
// console.log(false && false); // false
// console.log((5 === 5) && (3 < 5)); // true
 
// OR
// console.log(true || true); // true
// console.log(false || true); // true
// console.log(true || false); // true
// console.log(false || false); // false
// console.log((5 === 5) || (3 > 5)); // true
 
// NOT
// console.log(!true); // false
// console.log(!false); // true


// String Operator
/*
Operator string adalah operator yang digunakan untuk 
menggabungkan dua nilai string. Operator ini menggunakan simbol + 
dan termasuk dalam kategori binary operator.
*/

const first = "TRISTAR";
const second = "DIGISCH";
const merged = first + second;

console.log(merged);

/* catatan
Perlu diperhatikan bahwa simbol + memiliki fungsi ganda 
tergantung pada jenis operannya. Jika salah satu operan adalah string, simbol + 
akan berfungsi sebagai operator string untuk menggabungkan nilai 
string tersebut. Sebaliknya, jika kedua operand adalah angka, simbol + 
akan berfungsi sebagai operator aritmetika untuk melakukan penjumlahan.

Meskipun terlihat sederhana, penggunaan simbol + ini bisa sedikit 
membingungkan. Contohnya, pada operasi "2" + 2, hasilnya bukan 4, 
melainkan "22". Hal ini terjadi karena salah satu operannya adalah 
string sehingga simbol + berfungsi sebagai operator string.
*/