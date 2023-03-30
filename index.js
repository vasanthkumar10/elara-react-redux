const p1 = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p1");
    }, 2000);
  });
};

const p2 = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("p2 error");
    }, 3000);
  });
};

const p3 = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p3");
    }, 1000);
  });
};

const p4 = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p4");
    }, 5000);
  });
};

// p1()
//   .then((result) => {
//     console.log(result);

//     return p2();
//   })
//   .then((result2) => console.log(result2))
//   .catch((err) => {
//     console.log(err);
//   });

// Promise.all([p1(), p2()])
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

Promise.allSettled([p1(), p2(), p3(), p4()])
  .then((results) => {
    results.forEach((result) => {
      if (result.status === "fulfilled") {
        console.log(result.value, "get ready for GOA");
      } else {
        console.log(result.reason, "sleep here itself. ");
      }
    });
  })
  .catch((err) => {
    console.log(err);
  });

// Promise.race([p1(), p2()]).then((results) => {
//   console.log(results);
// });
