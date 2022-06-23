/**
 * promises are used to handle asynchronous operations
 * async await is used to handle asynchronous operations
 */
// 1. Promises are used to handle asynchronous operations
const promise = new Promise((resolve, reject) => {
  const hasMeeting = true;
  if (hasMeeting) {
    const meeting = {
      title: "Meeting",
      date: "12/12/2019",
    };
    resolve(meeting);
  } else {
    const error = new Error("No meeting found");
    reject(error);
  }
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error.message);
  });
