import React from 'react';
import Headernam from "./Header";
import Item from "./Headeritem"; // capitalized component name

function App() {
  return (
    <>
      <div className="flex h-[100px] w-full justify-between items-center bg-blue-900 px-[10px]">
        <Headernam></Headernam>
        <Item></Item> {/* capitalized Component name */}
      </div>
    </>
  );
}

export default App;
