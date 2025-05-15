function categorizeNumber(n) {
  for (let i = 0; i < n.length; i++) {
    if (typeof n[i] !== 'number') {
      throw new Error(
        'Input tidak valid, silahkan masukkan input bilangan bulat'
      );
    }

    const bilangan = n[i];

    // cek ganjil atau genap
    if (bilangan % 2 == 0) {
      console.log('Genap');
    } else {
      console.log('Ganjil');
    }

    // cek prima
    if (bilangan <= 1) {
      console.log('Bukan prima');
    } else if (bilangan == 2) {
      console.log('Prima');
    } else {
      let prima = true;
      for (let i = 2; i < Math.sqrt(bilangan); i++) {
        if (bilangan % i == 0) {
          prima = false;
          break;
        }

        const element = array[i];
      }

      if (prima) {
        console.log('Prima');
      } else {
        console.log('Bukan Prima');
      }
    }
  }
}

console.log(categorizeNumber(1))

try {
  categorizeNumber();
} catch (error) {
  console.log(error.message);
}
