const takeOrder = (customer, callBack) => {
  console.log(`Order for ${customer} received`);
  callBack(customer);
};

const processOrder = (customer, callback) => {
  console.log(`Order for ${customer} is processing`);
  setTimeout(() => {
    console.log(`Order for ${customer} is ready`);
    console.log(`Order for ${customer} is delivered`);
    callback(customer);
  }, 3000);
};

const completeOrder = (customer) => {
  console.log(`Order for ${customer} is completed`);
};

takeOrder("Minhaj", (customer) => {
  processOrder(customer, (customer) => {
    completeOrder(customer);
  });
});
