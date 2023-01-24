const getTodos = (/*callback, */ resources) => {
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
    console.log("promises 1 resolved: ", data);
    return getTodos("todos/mario.json");
  })
  .then((data) => {
    console.log("promises 2 resolved: ", data);
    return getTodos("todos/shaun.json");
  })
  .then((data) => {
    console.log("promises 3 resolved: ", data);
  })
  .catch((err) => {
    console.log("promise rejected: ", err);
  });
