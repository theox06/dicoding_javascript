const name = "Yanto";
let age = 32;

/* Penjelasan
name = adalah statement
"Agus" = adalah Expression dan adalah tipe data string
32 = adalah tipe data numerik
Const dan Let = adalah variabel
(Perbedaan const dan let, kalau const tidak bisa diubah lagi nilanya, 
sedangkan let bisa diubah nilanya) 
*/

/*
const brand = "WD-GREEN SSD" //string
const firmwareVersion = 1.5; //float
const size = 1024; //numberic
const isCache = true; //boolean
const speed = null; //null
console.log(`
        LINUX SERVER OS (SSD CACHE)
        Brand: ${brand}
        Firmware Version: ${firmwareVersion}
        Storage Size: ${size}
        SSD Cache status: ${isCache}
        Storage R/W Speed: ${speed}`
    );
*/

// konversi secara eksplisit

// konversi string
/*
const number = Math.random();
const boolean = true;

const strNumber = String(number);
const strBoolean = boolean.toString();

console.log(strNumber);
console.log(strBoolean);
*/

// konversi ke number
/*
const strNumber = '404';
const strFloat = '6.14';
const boolean = false;

const numFromString = Number(strNumber);
const floatFromString = Number(strFloat);
const numFromBoolean = Number(boolean);

console.log(numFromString);
console.log(floatFromString);
console.log(numFromBoolean);
*/

// konversi ke number (secara spesifik, beserta satuannya)
/*
const screenWidth = "1920px";
const screenHeight = "1080px";
const refreshRate = "60Hz";

const widthToNumber = parseInt(screenWidth);
const heightToNumber = parseInt(screenHeight);
const refreshRateToNumber = parseInt(refreshRate);

console.log(widthToNumber);
console.log(heightToNumber);
console.log(refreshRateToNumber);
*/

/*
const fileSize = "40.8 GB"
const videoBitrate = "20.40 Mbps";
const audioBitrate = "512.8 Kbps";

const fileSizeToNumber = parseFloat(fileSize);
const videoBitrateToNumber = parseFloat(videoBitrate);
const audioBitrateToNumber = parseFloat(audioBitrate);

console.log(fileSizeToNumber);
console.log(videoBitrateToNumber);
console.log(audioBitrateToNumber);
*/

// konversi ke boolean
/*
const number = 890;
const string = "TRISTAR";
const empty = null;

const boolFromNumber = Boolean(number);
const boolFromString = Boolean(string);
const boolFromNull = Boolean(empty);

console.log(boolFromNumber);
console.log(boolFromString);
console.log(boolFromNull);
*/

// konversi implisit

// string + numeric convert
/*
const usia = 20;
const message = 'Umurku: ' + usia;

console.log(message);
*/

// string numeric convert to numeric operation
/*
const strNumber = '256';
const result = strNumber * 2;

console.log(result);
*/

// konversi boolean ke number
const bool = true;
const result = 1 + bool;

console.log(result);