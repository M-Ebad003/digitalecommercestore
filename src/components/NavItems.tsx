"use client";
import { PRODUCT_CATEGORIES } from "@/config";
import React, { useState } from "react";
import NavItem from "./NavItem";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const isAnyOpen = activeIndex !== null;
  return (
    <div className="flex gap-4 h-full">
      {PRODUCT_CATEGORIES.map((category, id) => {
        const handleOpen = () => {
          // if(activeIndex === 1){
          //     setActiveIndex(null)
          // }else{
          //     setActiveIndex(id)
          // }
          activeIndex === id ? setActiveIndex(null) : setActiveIndex(id);
        };
        const isOpen = id === activeIndex;
        return (
          <NavItem
            key={category.value}
            category={category}
            handleOpen={handleOpen}
            isAnyOpen={isAnyOpen}
            isOpen={isOpen}
          />
        );
      })}
    </div>
  );
};

export default NavItems;
