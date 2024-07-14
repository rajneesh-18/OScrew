"use client";
import Link from "next/link";
import React from "react";

const menuItems = [
  {
    name: "Profiles",
    href: "/",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];

export default function Header() {
  return (
    <div className="relative w-full py-8">
      <div className="mx-auto flex w-fit rounded-full  items-center justify-center px-4 py-3 sm:px-6 lg:px-8 border border-olive shadow-xl bg-[rgba(0,0,0,0.1)]">
        <div className="inline-flex items-center space-x-2">
          <h1 className="text-xl font-bold text-sage">OScrew.</h1>
        </div>
        <div className="hidden grow items-start lg:flex t">
          <ul className="ml-12 inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="inline-flex items-center text-gray-300 hover:text-sage"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
