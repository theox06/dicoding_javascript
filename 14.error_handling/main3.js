function discountChecker(discounts) {
    for (let i = 0; i < discounts.length; i++) {
        if (typeof discounts[i] !== 'number') {
            throw new Error('Invalid input. Please provide an array of numbers.')
        } 

        const discount = discounts[i];
        let priceBeforeDiscount = 125000;
        let priceAfterDiscount
        
        if (discount === 10) {
            priceAfterDiscount = priceBeforeDiscount * 0.1;
        } else if (discount === 50) {
            priceAfterDiscount = priceBeforeDiscount * 0.5;
        }

        console.log(`Price before discount ${priceBeforeDiscount}, after get ${discount}% off the price is ${priceAfterDiscount}`);
    }
}

try {
    const discountValue = [10, 50];
    discountChecker(discountValue);
} catch (e) {
    console.error(e);
}