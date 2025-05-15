const day = new Date().getDay();


// if else
if (day === 0) {
    console.log('Minggu');
} else if (day === 1) {
    console.log('Senin');
} else if (day === 2) {
    console.log('Selasa');
} else if (day === 3) {
    console.log('Rabu');
} else if (day === 4) {
    console.log('Kamis');
} else if (day === 5) {
    console.log('Jumat');
} else if (day === 6) {
    console.log('Sabtu');
}

// switch
switch (day) {
    case 0:
        console.log('Minggu');
        break;
    case 1:
        console.log('Senin');
        break;
    case 2:
        console.log('Selasa');
        break;
    case 3:
        console.log('Rabu');
        break;
    case 4:
        console.log('Kamis');
        break;
    case 5:
        console.log('Jumat');
        break;
    case 6:
        console.log('Sabtu');
        break;
}