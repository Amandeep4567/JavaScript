const getTodos = (resources) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        // callback(undefined, data);
        resolve(data);
      } else if (request.readyState === 4) {
        // callback("could not fetch the data", undefined);
        reject("error getting resolved");
      }
    });

    request.open("GET", resources);
    request.send();
  });
};

getTodos("todos/luigi.json")
  .then((data) => {
    console.log("promises resolved: ", data);
  })
  .catch((err) => {
    console.log("promise rejected: ", err);
  });

// getTodos("todos/luigi.json", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
//   getTodos("todos/mario.json", (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(data);
//     }
//     getTodos("todos/shaun.json", (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(data);
//       }
//     });
//   });
// });

/*
// overview of the promise function with small example
const getSomething = () => {
  return new Promise((resolve, reject) => {
    //fetch something
    resolve("some data");
    // reject("some error");
  });
};

// getSomething().then(
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

getSomething()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
*/
