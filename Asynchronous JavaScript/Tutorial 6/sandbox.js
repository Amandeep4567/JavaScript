const getTodos = (resources, callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("could not fetch the data", undefined);
    }
  });
  request.open("GET", resources);
  request.send();
};

getTodos("todos/luigi.json", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
  getTodos("todos/mario.json", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
    getTodos("todos/shaun.json", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  });
});
