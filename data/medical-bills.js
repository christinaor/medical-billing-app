import sampleImg from '/src/assets/react.svg';

// Include hospital, service date, and amount on homepage

const medicalBills = [
  {
    id: 1,
    name: 'Jane Doe',
    address: '123 Main St',
    hospital: 'Main Hospital',
    serviceDate: '06-10-2023',
    amount: 50,
    billImg: sampleImg,
  },
  {
    id: 2,
    name: 'John Doe',
    address: '456 Main St',
    hospital: 'Main Hospital',
    serviceDate: '06-13-2023',
    amount: 250,
    billImg: sampleImg,
  },
];

export default medicalBills;