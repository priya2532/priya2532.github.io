const product = [
    { id: 1, name: "apple", price: 23 },
    { id: 2, name: "orange", price: 13 },
    { id: 3, name: "banana", price: 29 }
];

const cart = { 1: 4, 3: 5 };

let totals = []; // For grand total calculation

product.map(value => {
    if (cart[value.id]) {
        const qty = cart[value.id];
        const total = value.price * qty;
        console.log(`Name: ${value.name}, Price: ${value.price}, Qty: ${qty}, Total: ${total}`);
        totals.push(total); // Collect totals
    }
});

function grandtotal(values) {
    let x = values.reduce((sum, value) => sum + value, 0);
    console.log("Grand Total:", x);
}

grandtotal(totals);
