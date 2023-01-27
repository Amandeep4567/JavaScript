# JavaScript
<h1>Asynchronous JavaScript</h1>

Govern how we perform tasks which take some time to complete which means <b>"Start something now and finish it later"</b>.<br>
Asynchronous code is code that can start now and then finish later.

JavaScript can run one statement at a time <br>
> console.log(1);<br>
> console.log(2);<br>
> console.log(3);<br>
> console.log(4);

Javascript being called a <b>Single threaded</b> language.<br>
<img src="https://user-images.githubusercontent.com/90441055/215188641-3c5d1d3f-ebce-4aa7-a5c0-aab40f762518.png" width="280" height="350">

**_As we know that in synchronous JS one statement executes than it move to another statement to execute , and if the statement 2 is very long the statement 2 will take much time to execute the code, which block the rest of the statement/code to execute which takes so much time to execute, so this is a downfall of synchronous code and this is where asynchronous code comes into play to help us out._**<br>

Async to the Rescue...<br>
**start something now and finish it later.**<br>
<img src="https://user-images.githubusercontent.com/90441055/215195079-7c7e86c8-7fcb-4c8d-af40-a0fd33d143c3.png" width="280" height="350">

**Example:**<br>
*_console.log(1);<br>
console.log(2);<br>
SetTimeOut(()=>{<br>
     &nbsp; &nbsp; console.log("callback function fired"); &nbsp; &nbsp; //this is a Asynchronous function<br>
},4000);<br>
console.log(3);<br>
console.log(4);
*
