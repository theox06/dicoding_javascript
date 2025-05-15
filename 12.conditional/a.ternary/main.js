const subtotal = 20000;
const isStudent = false;
const discount = isStudent ? 0.1 : 0;

console.log(`Anda mendapatkan discount sebesar ${discount * subtotal}`);