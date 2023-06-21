import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AddBillFormProvider, AddBillFormContext } from '../../contexts/AddBillFormContext.jsx';

import Button from '../../components/Button/Button';

import styles from './styles.module.scss';

export default function AddBillFormPage() {
  // const [newBill, setNewBill] = useState({
  //   name: '',
  //   address: '',
  //   hospital: '',
  //   serviceDate: '',
  //   amount: '',
  //   billUpload: '',
  // });

  const navigate = useNavigate();

  const { billForm, updateBillForm } = useContext(AddBillFormContext);

  useEffect(() => {
    if (!billForm) {
      updateBillForm({
        name: '',
        address: '',
        hospital: '',
        serviceDate: '',
        amount: '',
      });
    }
  }, [billForm, updateBillForm]);

  return (
    <div className={styles.addBillFormPage}>
      <h2>Add New Bill</h2>

      <form className={styles.addBillForm}>
        <label htmlFor='name'>Name:</label>
        <input 
          name='name' 
          type='text' 
          value={billForm.name}
          onChange={(e) => updateBillForm({ name: e.target.value })}
          required
        />

        <label htmlFor='address'>Address:</label>
        <input
          name='address'
          type='text'
          value={billForm.address}
          onChange={(e) => updateBillForm({ address: e.target.value })}
          required
        />

        <label htmlFor='hospital'>Hospital:</label>
        <input
          name='hospital'
          type='text'
          value={billForm.hospital}
          onChange={(e) => updateBillForm({ hospital: e.target.value })}
          required
        />

        <label htmlFor='serviceDate'>Service Date:</label>
        <input
          name='serviceDate'
          type='date'
          value={billForm.serviceDate}
          onChange={(e) => updateBillForm({ serviceDate: e.target.value })}
          required
        />

        <label htmlFor='amount'>Bill Amount:</label>
        <input
          name='amount'
          type='number'
          value={billForm.amount}
          onChange={(e) => updateBillForm({ amount: e.target.value })}
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