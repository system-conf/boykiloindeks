import React from 'react';
import logo from '../assets/logo.png'; // Logonun doğru yolu olduğundan emin ol

const Header = () => {
  return (
    <header className="bg-primary text-secondary p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 mr-3" />
        <h1 className="text-3xl font-bold">Vücut Kitle Endeksi Hesaplama
        </h1>
      </div>
    </header>
  );
};

export default Header;
