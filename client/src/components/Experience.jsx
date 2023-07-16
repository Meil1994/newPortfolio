import React, { useState } from 'react';
import Kodego from './Kodego';
import Concentrix from './Concentrix';
import Sitel from './Sitel';

const Experience = () => {
  const [selectedButton, setSelectedButton] = useState('KodeGo'); 

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const renderSelectedComponent = () => {
    switch (selectedButton) {
      case 'KodeGo':
        return <Kodego />;
      case 'Concentrix':
        return <Concentrix />;
      case 'Sitel':
        return <Sitel />;
      default:
        return null;
    }
  };

  return (
    <div className='bg-gradient-to-r from-stone-900 to-slate-600'>
      <div className='p-5 pb-0 500:p-20 500:pb-0 923:pt-20 923:p-40 923:pb-0 1099:p-60 1099:pt-20 1099:pb-0'>
        <p className='text-red-700 text-3xl'>Experience..</p>
        <p className='mt-5 text-white'>
          Though I currently don't have web developer-related work experience, I've listed several relevant jobs and
          training that I think will help build my career as a web developer. Not just in technical, but also in work
          values.
        </p>
      </div>

      <div className='768:grid 768:grid-cols-4 p-5 500:p-20 500:pt-10 500:pb-20 923:p-40 923:pt-10 923:pb-20 1099:p-60 1099:pt-10 1099:pb-20'>
        <div className='col-span-1 pl-0 p-5 pr-0 768:pr-5 pt-0'>
          <button
            className={`w-100% bg-red-700 p-4 text-white ${selectedButton === 'KodeGo' ? 'bg-opacity-100' : 'bg-opacity-50'}`}
            onClick={() => handleButtonClick('KodeGo')}
          >
            KodeGo
          </button>
          <button
            className={`w-100% bg-red-700 p-4 text-white mt-2 ${
              selectedButton === 'Concentrix' ? 'bg-opacity-100' : 'bg-opacity-50'
            }`}
            onClick={() => handleButtonClick('Concentrix')}
          >
            Concentrix
          </button>
          <button
            className={`w-100% bg-red-700 p-4 text-white mt-2 ${selectedButton === 'Sitel' ? 'bg-opacity-100' : 'bg-opacity-50'}`}
            onClick={() => handleButtonClick('Sitel')}
          >
            Sitel
          </button>
        </div>

        <div className='col-span-3 p-4 ring-2 ring-red-700'>{renderSelectedComponent()}</div>
      </div>
    </div>
  );
};

export default Experience;
