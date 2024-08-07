import React, { useState } from 'react';

const Divider = () => {
  const [weight, setWeight] = useState('');
  const [parts, setParts] = useState('');
  const [result, setResult] = useState(null);

  const handleDivide = () => {
    if (weight && parts) {
      const dividedWeight = parseFloat(weight) / parseInt(parts);
      setResult(dividedWeight.toFixed(2));
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md w-full max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Malzemeyi Böl</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Toplam Kilo:</label>
        <input
          type="number"
          className="w-full p-2 border border-gray-300 rounded mt-1"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Bölünen Parça Sayısı:</label>
        <input
          type="number"
          className="w-full p-2 border border-gray-300 rounded mt-1"
          value={parts}
          onChange={(e) => setParts(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={handleDivide}
      >
        Hesapla
      </button>
      {result !== null && (
        <div className="mt-4">
          <h3 className="text-xl">Bölünmüş Kilo: {result} kg</h3>
        </div>
      )}
    </div>
  );
};

export default Divider;
