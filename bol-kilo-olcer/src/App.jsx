import React, { useRef } from 'react';
import Header from './components/Header';
import BMICalculator from './components/BMICalculator';
import Footer from './components/Footer';

const App = () => {
  const bmiCalculatorRef = useRef(null);

  const handleReset = () => {
    if (bmiCalculatorRef.current) {
      bmiCalculatorRef.current.handleReset();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      <Header onReset={handleReset} />
      <main className="p-4 flex-grow">
        <BMICalculator ref={bmiCalculatorRef} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
