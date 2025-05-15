function checkVat(vats) {
    for (let i = 0; i < vats.length; i++) {
        if (typeof vats[i] !== 'number') {
            throw new Error('Invalid input. Please insert number value of array!');
        }

        const vat = vats[i];
        let price = 150000;
        let vatFromPrice;

        if (vat == 5) {
            vatFromPrice = price * 0.05;
        } else if (vat == 10) {
            vatFromPrice = price * 0.1;
        }
        
        console.log(`the vat total from IDR ${price} if the vat value is ${vat}% is IDR ${vatFromPrice}
                    (C) 2025 TRISTAR PAYTREN (THE GROUP MEMBER OF TRISTAR DIGITAL PAYMENT)`);
    }
}

try {
    const vatValue = [5, 10];
    checkVat(vatValue);
} catch (e) {
    console.error(e);
}