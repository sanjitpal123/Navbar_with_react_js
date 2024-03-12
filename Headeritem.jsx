import React from "react";

function Item() {
  const items = ["Home", "About Us", "Contact Us", "Service", "Project"];
  let isempty = items.length === 0;
  return (
    <>
      {isempty ? (
        <h3>item is not found</h3>
      ) : (
        <ul class="flex  gap-[20px]">
          {items.map((item, index) => {
            return (
              <li
                key={index}
                class=" text-white font-bold  hover:text-red-500 transition duration-[0.3s]  "
              >
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default Item; // Exporting Item as default
