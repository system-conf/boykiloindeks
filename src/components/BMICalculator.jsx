import React, { useState, forwardRef, useImperativeHandle } from 'react';

const BMICalculator = forwardRef((props, ref) => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState('');

  useImperativeHandle(ref, () => ({
    handleReset() {
      setWeight('');
      setHeight('');
      setAge('');
      setGender('male');
      setBMI(null);
      setCategory('');
    }
  }));

  const handleCalculate = () => {
    if (weight && height && age) {
      const heightInMeters = parseFloat(height) / 100;
      const bmiValue = parseFloat(weight) / (heightInMeters * heightInMeters);
      setBMI(bmiValue.toFixed(2));
      setCategory(getBMICategory(bmiValue));
    }
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return 'Zayıf';
    if (bmi >= 18.5 && bmi < 24.9) return 'Normal kilolu';
    if (bmi >= 25 && bmi < 29.9) return 'Fazla kilolu';
    return 'Obez';
  };

  return (
    <div className="bg-white p-6 rounded shadow-md w-full max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-black">Kitle İndeksi Hesapla</h2>
      <div className="mb-4">
        <label className="block text-black">Boy (cm):</label>
        <input
          type="number"
          className="w-full p-2 border border-gray-300 rounded mt-1 text-black"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-black">Kilo (kg):</label>
        <input
          type="number"
          className="w-full p-2 border border-gray-300 rounded mt-1 text-black"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-black">Yaş:</label>
        <input
          type="number"
          className="w-full p-2 border border-gray-300 rounded mt-1 text-black"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-black">Cinsiyet:</label>
        <select
          className="w-full p-2 border border-gray-300 rounded mt-1 text-black"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="male">Erkek</option>
          <option value="female">Kadın</option>
        </select>
      </div>
      <button
        className="bg-black text-white py-2 px-4 rounded w-full"
        onClick={handleCalculate}
      >
        Hesapla
      </button>
      {bmi && (
        <div className="mt-4 text-center">
          <h3 className="text-xl text-black">Vücut Kitle İndeksi: {bmi}</h3>
          <p className="text-lg text-black">Kategori: {category}</p>
        </div>
      )}
    </div>
  );
});

export default BMICalculator;
