function checkData(nis, nama, kelas,  kode_kelas, kode_sekolah, asal_sekolah) {
    if (nis == 202201071001) {
        nama = "Jeconia Callysta Setio Halim";
        kelas = "XII IPS";
        kode_kelas = 3;
        asal_sekolah = "SMAS MARDI WALUYA CIBINONG";
    } else if (nis == 202201071004) {
        nama = "Fransiskus Benedictus Gawi Rebong";
        kelas = "XII IPS";
        kode_kelas = 4;
        asal_sekolah = "SMAS MARDI WALUYA CIBINONG";
    } else if (nis == 202201071006) {
        nama = "Bimo J Wiyadi";
        kelas = "XII IPS";
        kode_kelas = 4;
        asal_sekolah = "SMAS MARDI WALUYA CIBINONG";
    } else {
        `Data tidak ditemukan!`;
    }

    console.log(`
        Nama Siswa   : ${nama}
        NIS          : ${nis}
        Kode sekolah : ${kode_sekolah}
        Kelas        : ${kelas}
        Kode Kelas   : ${kode_kelas}
        Asal sekolah : ${asal_sekolah}
        
        TRISTAR DIGISCH 1.0 (BETA-VERSION)
        `);
}

const readStorage = function(dataInGB, system, fileSystem, brand) {

    let calculate = dataInGB / 1.074;

    const divideSize = calculate.toFixed(2);

    if (system == "Windows 10" || system == "Windows 11") {
        fileSystem = "NTFS";
    } else if (system == "Mac OS X (Silicon)" || system == "Mac OS X (Intel)") {
        fileSystem = "APFS";
    } else if (system == "Ubuntu 20.04" || system == "Ubuntu 22.04") {
        fileSystem = "ext4"
    } else {
        console.log(`Not found!`)
    }

    console.log(`
                 Actual size : ${divideSize} GB
                 System : ${system}
                 File System : ${fileSystem}
                 Brand : ${brand}`);

}

// Dijadikan sebagai argumen dari parameter 'operation'
function calculate(operation, numA, numB) {
    return operation(numA, numB);
}
   
// Dijadikan sebagai return value
function multiplier(x) {
    return function (num) {
        return x * num;
    };
}

const dataSize = 1024;
const operatingSystem = "Windows 11";
const storageBrand = "WD Blue 1TB";

// console.log(checkData);
// checkData(202201071001, "", "", "" , 450, "");
// checkData(202201071004  , "", "", "" , 450, "");
// checkData(202201071006  , "", "", "" , 450, "");

// readStorage(dataSize, operatingSystem, "", storageBrand);
// calculate(operation(3, 4));

const greet = (name) => "Hello, " + name + "!";
console.log(greet("Bob"));