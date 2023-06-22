import { createContext, useState } from 'react';

const BillsContext = createContext();

const BillsProvider = ({ children }) => {
  const [bills, setBills] = useState([
    {
      name: 'Jane Doe',
      address: '10-01 111th St',
      hospital: 'One O One Hospital',
      serviceDate: '2021-01-10',
      amount: '10101',
      // billUpload: '',
    },
    {
      name: 'John Smith',
      address: '100 Main St',
      hospital: 'Main Hospital',
      serviceDate: '2022-02-20',
      amount: '20002',
      // billUpload: '',
    }
  ]);

  const updateBills = (newBill) => {
    setBills([...bills, {...newBill}]);
  };

  console.log(bills)

  return (
    <BillsContext.Provider value={{ bills, updateBills }}>
      {children}
    </BillsContext.Provider>
  );
};

export { BillsContext, BillsProvider };