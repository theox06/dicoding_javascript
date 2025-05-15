function categorizeNumber(input) {
  if (typeof input !== "number") {
    throw new Error("Input harus berupa bilangan bulat");
  }

  if (input < 0) {
    return "Negatif";
  } else if (input === 0) {
    return "Nol";
  } else if (Prima(input)) {
    return "Prima";
  } else if (input % 2 === 0) {
    return "Genap";
  } else {
    return "Ganjil";
  }
}

function Prima(input) {
  if (input <= 1) {
    return false;
  } else if (input === 2) {
    return true;
  }

  for (let i = 2; i < Math.sqrt(input); i++) {
    if (input % i === 0) {
      return false;
    }
  }

  return true;
}

// Contoh

console.log(categorizeNumber(15)); // Output: "Ganjil"

console.log(categorizeNumber(12)); // Output: "Genap"

console.log(categorizeNumber(17)); // Output: "Prima"

console.log(categorizeNumber(0)); // Output: "Nol"

console.log(categorizeNumber(-5)); // Output: "Negatif"

try {
  categorizeNumber("abc");
} catch (error) {
  console.log(error.message);
} // Output: "Input harus berupa bilangan bulat"
