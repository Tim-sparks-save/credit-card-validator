function validateCard(cardNumber) {
    // Remove any spaces or dashes the user might have entered
    const cleaned = cardNumber.replace(/[\s-]/g, '');

    // 1. Visa: Starts with 4, total of 13 or 16 digits
    const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;

    // 2. Mastercard: Starts with 51-55 or 2221-2720, total of 16 digits
    const mastercardRegex = /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/;

    if (visaRegex.test(cleaned)) {
        return "Valid Visa Card";
    } else if (mastercardRegex.test(cleaned)) {
        return "Valid Mastercard";
    } else {
        return "Invalid or Unsupported Card Type";
    }
}

// Example Tests
console.log(validateCard("4123 4567 8901 2345")); // Valid Visa Card
console.log(validateCard("5123-4567-8901-2345")); // Valid Mastercard
console.log(validateCard("1234-5678-9012-3456")); // Invalid or Unsupported Card Type
