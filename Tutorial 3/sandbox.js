const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
  //   console.log(request, request.readyState);
  if (request.readyState === 4 && request.status === 200) {
    console.log(request, request.responseText);
  } else if (request.readyState === 4) {
    console.log("Could not fetch the data");
  }
});

request.open("GET", "https://jsonplaceholder.typicode.com/todoss/"); // we included here here our own api for checking
// request.open("GET", "https://jsonplaceholder.typicode.com/todos/"); // this is the correct API which fetch the data
request.send();
