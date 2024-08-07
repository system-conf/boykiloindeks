import React from 'react';
import Header from './components/Header';
import BMICalculator from './components/BMICalculator';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      <Header />
      <main className="p-4 flex-grow">
        <BMICalculator />
      </main>
      <Footer />
    </div>
  );
};

export default App;
