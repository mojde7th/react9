import { navbarLinks } from "../libs/constants";
import React from "react";
function Navbar() {
  return (
    <header className="bg-red-200 text-white flex gap-4 py-3">
      {navbarLinks.map((item, index) => {
        console.log(item, index);
        return (
          <div key={index} className="mx-2 text-2xl">
            <React.Fragment>{item.title}</React.Fragment>
          </div>
        );
      })}
    </header>
  );
}

export default Navbar;
