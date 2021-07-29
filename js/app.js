// TICKET PRICE CALCULATOR
// ask and store user age
let userAge = parseInt(prompt("How old are you?"));
// ask and store distance of the destination
let distance = parseInt(prompt("How far do you want to travel (km)"));
// store price multiplier, minor discount and over 65 discount
const priceMultiplier = 0.21;
const minorDiscount = 0.8;
const over65Discount = 0.6;
// calculate base price
let price = distance * priceMultiplier;
// if user is a minor apply discount
if (userAge < 18) {
    price *= minorDiscount;
}
// if user age is over 65 apply discount
if (userAge >= 65) {
    price *= over65Discount;
}
// show price to the user
alert("The ticket price is: " + price + "€");