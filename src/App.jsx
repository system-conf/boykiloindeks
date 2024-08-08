import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
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
      <Helmet>
        <title>Vücut Kitle Endeksi Hesaplama</title>
        <meta name="description" content="Vücut Kitle Endeksi (BMI) hesaplama aracı ile sağlığınızı takip edin." />
        <meta name="keywords" content="BMI, Vücut Kitle Endeksi, Sağlık, Kilo, Boy" />
        <meta name="author" content="Süleyman Talha Duman" />
      </Helmet>
      <Header onReset={handleReset} className="bg-black text-white" />
      <main className="p-4 flex-grow bg-white text-black">
        <BMICalculator ref={bmiCalculatorRef} />
      </main>
      <Footer className="bg-black text-white" />
    </div>
  );
};

export default App;
