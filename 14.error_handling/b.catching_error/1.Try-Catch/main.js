try {
    // console.log('Starting program...');
    // console.log('Closing program...');
} catch (err) {
    // console.log(`No error detected, it's a nice day!`);
}

try {
    console.log('Starting program...');
    throw new Error('Error: This program stopped');
    console.log('Closing program...');
} catch (err) {
    console.log(`Error detected, please contact the software administration`);
}