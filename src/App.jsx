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
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <Header onReset={handleReset} className="bg-black text-white" />
      <main className="p-4 flex-grow bg-white text-black">
        <BMICalculator ref={bmiCalculatorRef} />
      </main>
      <Footer className="bg-black text-white" />
    </div>
  );
};

export default App;
