function convertCelciusToFahrenheit(temperature = 50) {
    const temperatureInFahrenheit = 9 / 5 * temperature + 32;

    console.log('Hasil konversi:', temperatureInFahrenheit);
}

// let temperatureInCelcius = 17;
// temperatureInCelcius = 23;

// Hanya menampilkan nilai function 
// console.log(convertCelciusToFahrenheit);
// Output => [function: convertCelciusToFahrenheit]

// Akan menjalankan isi function
convertCelciusToFahrenheit();
convertCelciusToFahrenheit(90);
// output => Hasil konversi: 60.8