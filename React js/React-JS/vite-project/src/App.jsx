// import React, { useState } from 'react'

// const App = () => {
//   const [user, setuser] = useState("Himani")
//   const [Num, setNum] = useState(0)

//   const changeUser = () => {
//     setuser("Neha")
//   };

//   const increment = () => {
//     setNum(Num + 10) // Update the state with the new value
//   };

//   const decrement = () => {
//     setNum(Num - 10) // Update the state with the new value
//   };

//   return (
//     <>
//       <h1 className='text-5xl bg-purple-200 text-black'>Hello {user}</h1>
//       <br />
//       <br />
//       <button onClick={changeUser}>Change Username</button>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <br />
//       <br />
//       <p>Current Number: {Num}</p>
//     </>
//   )
// }

// export default App

import React, { useState } from 'react';

const App = () => {
  const [user, setUser] = useState(""); // Fixed state variable naming to match convention

  const submitHandler = (e) => {
    e.preventDefault(); // Correctly invoke preventDefault
    console.log("Submitted");
    console.log("User:", user); // Log the user input for better feedback
    setUser(' ');
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          value={user}
          onChange={(e) => setUser(e.target.value)} // Simplified onChange handler
          className="px-4 py-3 m-5 text-xl bg-slate-50 text-black rounded"
          type="text"
          placeholder="Enter your name" // Added placeholder for better UX
        />
        <button className="px-4 py-3 m-5 bg-emerald-400 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
