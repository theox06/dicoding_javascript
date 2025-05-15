function categorizeNumber(input) {
    for (let i = 0; i < input.length; i++) {
        if (typeof input[i] !== 'number') {
            throw new Error('Input tidak valid, silahkan masukkan input angka');
        }

        const inputs = input[i];

        // cek ganjil atau genapz
        if (inputs % 2 == 0) {
            console.log('Genap');
        } else {
            console.log('Ganjil');
        }

        // cek prima
        if (inputs <= 1) {
            console.log('Bukan prima');
        } else if (inputs == 2) {
            console.log('Prima');
        } else {
            let prima = true;
            for (let i = 2; i <= Math.sqrt(inputs); i++) {
                if (inputs % i == 0) {
                    prima = false;
                    break;
                }
                if (prima) {
                    console.log(`${inputs} Prima`);
                } else {
                    console.log(`${inputs} Bukan Prima`);
                }
                
            }
        }
        
    }
}

console.log(categorizeNumber(4));

try {
    categorizeNumber();
} catch (error) {
    console.log(error.message);
}