// Asynchronous JavaScript - callbacks, promises and async-await

const processOrder = (customer) => {

    console.log(`Processing Order for customer-1`)

    setTimeout(() => {
        console.log(`cocking complete`)
    }, 3000);

    console.log(`order processed for customer-1`)

}

console.log(`take order for customer-1`);
processOrder();
console.log(`complete order for customer-1`);