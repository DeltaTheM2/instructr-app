import React from 'react';
import SideMenu from './components/SideMenu/SideMenu';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex">
      <SideMenu />
      <div className="flex-grow p-4">
        {children}
      </div>
    </div>
  );
};

export default Layout;
