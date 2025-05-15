try {
    console.log('Starting program...');
    console.log('Fetching data...');
    throw new Error(`Error: cannot fetching data from the server`)
} catch (err) {
    console.log(`There's error while fetching data`);
} finally {
    console.log(`Welcome to TRISTAR DIGISCH, Your digital school management platform`);
}