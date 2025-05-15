// const result = 3 * 4;
// console.log(result); // 12

const convertCelciusToFahrenheit = function (temperature) {
    const result = (9 / 5) * temperature + 32;
    return result;
};

const temperatureInFahrenheit = convertCelciusToFahrenheit(90);
console.log('Hasil konversi:', temperatureInFahrenheit);