import React, { useReducer } from "react";

// 1st Way 

// const reducer = (counter, action) => {
//   console.log("action:", action);
//   switch (action.type) {
//     case "INCREMENT": {
//       return counter + 1;
//     }

//     case "DECREMENT": {
//       return counter - 1;
//     }

//     default: {
//       console.log("Type Incorrect", action.type);
//       return counter;
//     }
//   }
// };


// 2nd way 
const reducer = (counter, action) => {
    console.log("action:", action);
    switch (action.type) {
      case "INCREMENT": {
        return counter + 1;
      }
  
      case "DECREMENT": {
        return counter - 1;
      }
  
      default: {
        console.log("Type Incorrect", action.type);
        return counter;
      }
    }
  };


const Reducer = () => {
  const [counter, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      Counter: {counter}
      <div>
        <button onClick={() => dispatch({ type: "DECREMENT" })}> - </button>
        <button onClick={() => dispatch({ type: "INCREMENT" })}> + </button>
      </div>
    </div>
  );
};

export default Reducer;
