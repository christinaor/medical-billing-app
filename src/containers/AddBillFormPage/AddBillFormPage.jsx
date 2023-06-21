import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button/Button';

import styles from './styles.module.scss';

export default function AddBillPage() {
  const [newBill, setNewBill] = useState({
    name: '',
    address: '',
    hospital: '',
    serviceDate: '',
    amount: '',
    billUpload: '',
  });

  const navigate = useNavigate();

  return (
    <div className={styles.addBillFormPage}>
      <h2>Add New Bill</h2>
      <form className={styles.addBillForm}>
        <label htmlFor='patient-name'>Name:</label>
        <input 
          name='patient-name' 
          type='text' 
          value={newBill.name}
          onChange={(e) => setNewBill({...newBill, name: e.target.value})}
          required
        />

        <label htmlFor='patient-address'>Address:</label>
        <input
          name='patient-address'
          type='text'
          value={newBill.address}
          onChange={(e) => setNewBill({...newBill, address: e.target.value})}
          required
        />

        <label htmlFor='hospital'>Hospital:</label>
        <input
          name='hospital'
          type='text'
          value={newBill.hospital}
          onChange={(e) => setNewBill({...newBill, hospital: e.target.value})}
          required
        />

        <label htmlFor='service-date'>Service Date:</label>
        <input
          name='service-date'
          type='date'
          value={newBill.serviceDate}
          onChange={(e) => setNewBill({...newBill, serviceDate: e.target.value})}
          required
        />

        <label htmlFor='bill-amount'>Bill Amount:</label>
        <input
          name='bill-amount'
          type='number'
          value={newBill.amount}
          onChange={(e) => setNewBill({...newBill, amount: e.target.value})}
          required
        />

        {/* { Bill Upload option here } */}
      </form>
      <div className={styles.formButtons}>
        <Button text='Review' handleClick={() => navigate('./summary')} />
        <Button text='Cancel' handleClick={() => navigate('/')} />
      </div>
    </div>
  )
}