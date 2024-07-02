// "use client"; // This should be at the very top of the file

// import { useState } from "react";
import fs from "fs/promises";
import Navbar from "@/components/Navbar";

export default function Home() {
  // const [count, setCount] = useState(0);
  console.log("hey i am Hafijur");
  let a = fs.readFile(".gitignore");
  a.then((e) => {
    console.log(e.toString());
  });
  return (
    <div>
      <Navbar/>
      I am component
      {/* {count} */}
      {/* <button onClick={() => setCount(count + 1)}>Click</button> */}
    </div>
  );
}
