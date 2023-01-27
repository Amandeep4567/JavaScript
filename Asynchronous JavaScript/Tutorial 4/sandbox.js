const getTodos = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      //   console.log(request, request.responseText);
      callback(undefined, request.responseText);
    } else if (request.readyState === 4) {
      //   console.log("could not fetch the data");
      callback("could not fetch data", undefined);
    }
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  request.send();
};

console.log(1);
console.log(2);

getTodos((err, data) => {
  // Asynchronous function
  console.log("callback fired");
  //   console.log(err, data);
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

console.log(3);
console.log(4);
