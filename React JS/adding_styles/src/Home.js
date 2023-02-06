import { useState } from "react";

const Home = () => {
  //   let name = "mario";
  const [name, setName] = useState("mario");
  const [age, setAge] = useState(25);

  const handleClick = () => {
    // console.log("hello, ninjas");
    setName("luigi");
    setAge(30);
  };
  //   const handleClickAgain = (name) => {
  //     console.log("hello" + name);
  //   };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click Me</button>
      {/* <button
        onClick={() => {
          handleClickAgain(" Mario");
        }}
      >
        Click Me Again
      </button> */}
    </div>
  );
};

export default Home;
