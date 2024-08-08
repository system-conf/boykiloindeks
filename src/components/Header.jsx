import React from 'react';
import logo from '../assets/logowhite.png'; // Logonun doğru yolu olduğundan emin ol

const Header = ({ onReset }) => {
  return (
    <header className="bg-black text-white p-4 flex items-center justify-center">
      <div className="flex items-center cursor-pointer" onClick={onReset}>
        <img src={logo} alt="Logo" className="h-10 mr-3" />
        <h1 className="text-2xl sm:text-3xl font-bold">Vücut Kitle Endeksi Hesaplama</h1>
      </div>
    </header>
  );
};

export default Header;
