import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = (props) => {
  const [activeStep, setActiveStep] = useState(0);
  const handleNext= () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }

  return (
    <AppContext.Provider value={[activeStep, setActiveStep, handleNext, handleBack]}>
      {props}
    </AppContext.Provider>
  );
};