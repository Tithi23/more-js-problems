const phones = [
    { name: 'samsung s5', Price: 12000, camera: 10, storage: 32 },
    { name: 'oppo 3d', Price: 50000, camera: 8, storage: 64 },
    { name: 'walton g6', Price: 32000, camera: 5, storage: 32 },
    { name: 'iphone s5', Price: 1300000, camera: 10, storage: 32 },
    { name: 'xiomi f5', Price: 9000, camera: 8, storage: 32 }
];

let cheapest = phones[0, 1, 2, 3, 4];
for (const phone of phones) {
    // console.log(phone);
    // compare price
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
}
console.log(cheapest);