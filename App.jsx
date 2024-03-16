import React from 'react';
import Headernam from "./Header";
import Item from "./Headeritem"; // Capitalized component name

function App() {
  return (
    <>
      <div className="flex h-[100px] w-full justify-between items-center bg-blue-900 px-[10px]">
        <Headernam></Headernam>
        <Item></Item> {/* Capitalized component name */}
      </div>
    </>
  );
}

export default App;
