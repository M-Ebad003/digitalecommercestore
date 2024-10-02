"use client";
import { PRODUCT_CATEGORIES } from "@/config";
import React, { useEffect, useRef, useState } from "react";
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/use-onClickHook";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  useEffect(() => {
      const handler = (e: KeyboardEvent)=>{
          if(e.key === "Escape"){
            setActiveIndex(null)
          }
      }
      document.addEventListener('keydown',handler)
      return ()=>{
        document.removeEventListener("keydown",handler)
      }
  }, [])
  

  const isAnyOpen = activeIndex !== null;

  const navRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(navRef, () => setActiveIndex(null));
  return (
    <div className="flex gap-4 h-full" ref={navRef}>
      {PRODUCT_CATEGORIES.map((category, id) => {
        const handleOpen = () => {
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
