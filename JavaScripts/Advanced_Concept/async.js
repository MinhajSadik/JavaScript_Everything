//sync code
// const takeOrder = (customer, callBack) => {
//   console.log(`Order for ${customer} received`);
//   callBack(customer);
// };

// const processOrder = (customer, callback) => {
//   console.log(`Order for ${customer} is processing`);
//   setTimeout(() => {
//     console.log(`Order for ${customer} is ready`);
//     console.log(`Order for ${customer} is delivered`);
//     callback(customer);
//   }, 3000);
// };

// const completeOrder = (customer) => {
//   console.log(`Order for ${customer} is completed`);
// };

// takeOrder("Minhaj", (customer) => {
//   processOrder(customer, (customer) => {
//     completeOrder(customer);
//   });
// });

//async code
const hasMeeting = false;
const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetails = {
      name: "Technical Meeting",
      date: new Date().toLocaleDateString(),
      location: "Google Meet",
    };
    resolve(meetingDetails);
  } else {
    const error = new Error("Meeting is already scheduled");
    reject(error);
  }
});

const addToCalendar = (meetingDetails) => {
  const celendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.date} at ${meetingDetails.location}`;
  return Promise.resolve(celendar);
};

// meeting
//   .then(addToCalendar)
//   .then((res) => {
//     //resolve data
//     console.log(res);
//   })
//   .catch((error) => {
//     //reject data
//     console.error(error.message);
//   });

const promise = Promise.resolve("Promise 0 resolved");
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 1000);
});

// Promise.all([promise, promise1]).then((res) => {
//   console.log(res);
// });

//async-await
const asyncFunc = async () => {
  return `Asynchronous`;
};

// console.log(await asyncFunc());

//proper usecase of async-await
async function myMeeting() {
  try {
    const meetingDetails = await meeting;
    const calendar = await addToCalendar(meetingDetails);
    console.log(calendar);
  } catch (error) {
    console.error(error.message);
  }
}

myMeeting();
console.log("End of program");
