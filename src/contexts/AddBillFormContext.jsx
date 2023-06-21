import { createContext, useState } from 'react';

const AddBillFormContext = createContext();

const AddBillFormProvider = ({ children }) => {
  const [billForm, setBillForm] = useState({
    name: '',
    address: '',
    hospital: '',
    serviceDate: '',
    amount: '',
    // billUpload: '',
  });

  const updateBillForm = (updatedField) => {
    setBillForm({...billForm, ...updatedField});
  };

  console.log(billForm)

  return (
    <AddBillFormContext.Provider value={{ billForm, updateBillForm }}>
      {children}
    </AddBillFormContext.Provider>
  );
};

export { AddBillFormContext, AddBillFormProvider };