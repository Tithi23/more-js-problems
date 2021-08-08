// simple shopping
const products = [
    { name: 'laptop', price: 43000 },
    { name: 'shirt', price: 4000 },
    { name: 'watch', price: 2000 },
    { name: 'phone', price: 40000 },
    { name: 'waterbotle', price: 400 }
];
let totalPrice = 0;

for (const product of products) {
    totalPrice = totalPrice + product.price;
}
//console.log(totalPrice);

//mega shopping
const card = [
    { name: 'laptop', price: 43000, Quantity: 4 },
    { name: 'shirt', price: 4000, Quantity: 3 },
    { name: 'watch', price: 2000, Quantity: 2 },
    { name: 'phone', price: 40000, Quantity: 1 },
    { name: 'waterbotle', price: 400, Quantity: 5 }
];
let cardTotal = 0;
for (const product of card) {
    // console.log(product);
    const productTotal = product.price * product.Quantity;
    cardTotal = cardTotal + productTotal;
}
console.log(cardTotal);
