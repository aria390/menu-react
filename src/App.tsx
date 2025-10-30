import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex justify-center h-full">
      <div className="pt-30 flex flex-col gap-8">
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-5xl font-semibold text-center">Our Menu</h1>
          <div className="bg-[#c59d5f] h-[5px] w-[90px]"></div>
        </div>
        <ul className="flex gap-4">
          <li>All</li>
          <li>Breakfast</li>
          <li>Lunch</li>
          <li>Shakes</li>
          <li>Dinner</li>
        </ul>
      </div>
      <div></div>
    </main>
  );
}

export default App;
