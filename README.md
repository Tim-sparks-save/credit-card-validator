# credit-card-validator
Visa (/^4[0-9]{12}(?:[0-9]{3})?$/): Checks if the number starts with a 4. It looks for 12 digits after the 4, and optionally 3 more to support both 13 and 16-digit cards.
​Mastercard: Uses a specific range check (5[1-5] or 2221-2720) to ensure the card prefix matches Mastercard's official standards before validating the remaining length.
