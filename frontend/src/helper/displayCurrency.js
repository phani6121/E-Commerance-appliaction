const displayINRCurrency = (num) => {
    // This defines a function named displayINRCurrency using an arrow function syntax.
    // It takes one argument num, which is expected to be a number(representing an amount of money).
    const formatter = new Intl.NumberFormat("en-IN", {
        // Creates a new instance of Intl.NumberFormat, which is a built-in JavaScript object used for formatting numbers according to locale - specific conventions.
        // This is the locale code for English as used in India, so numbers will be formatted using Indian conventions(like 1,00,000 instead of 100,000).
        style: "currency",
        // Tells the NumberFormat object to format the number as currency.
        currency: "INR",
        // Specifies the currency code. "INR" stands for Indian Rupee, so the result will include the rupee symbol(₹).
        minimumFractionDigits: 2
        // Ensures that at least two digits are shown after the decimal point.For example, 100 becomes ₹100.00.
    })
    return formatter.format(num)
    // Uses the formatter object to format the input number(num) and returns the formatted string.
}
export default displayINRCurrency