// components/SideMenu.tsx
import React from 'react';
import Link from 'next/link';

const SideMenu = () => {
  return (
    <div className="h-full w-64 fixed left-0 top-0 bg-gray-800 text-white">
      <div className="p-5">Logo or Brand Name</div>
      <ul>
        <li className="p-3 hover:bg-gray-700">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="p-3 hover:bg-gray-700">
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        {/* Add more navigation links here */}
      </ul>
    </div>
  );
};

export default SideMenu;
