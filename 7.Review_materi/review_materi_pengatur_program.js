// error
const error = new Error('terjadi galat pada sistem');
// console.log(error);

// try-catch finally
try {
    // console.log('Fetching data...');
} catch (err) {
    // console.log('Trying again...');
} finally {
    // console.log('(503) Service Unavailable');
}

function cekGaji(kodeGaji) {
    for (let i = 0; i < kodeGaji.length; i++) {
        if (typeof kodeGaji[i] !== 'string') {
            throw new Error('Input tidak sesuai. Silahkan masukkan input angka');
        }

        const kodeGajian = kodeGaji[i];
        let gaji;

        if (kodeGajian == '3F001') {
            gaji = 3500000;
        } else if (kodeGajian == '3F002') {
            gaji = 4500000;
        } else if (kodeGajian == '3F003') {
            gaji = 5500000;
        } else {
            console.log(`Data tidak ditemukan`);
        }

        console.log(`Gaji kamu adalah Rp ${gaji} berdasarkan kode gajian ${kodeGajian}`);
        
    }
}

try {
    const kodeGajiKaryawan = ['3F001', '3F002', '3F003'];
    cekGaji(kodeGajiKaryawan); 
} catch (e) {
    console.log(e);
}