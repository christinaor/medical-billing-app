import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AddBillFormContext } from '../../contexts/AddBillFormContext.jsx';

import Button from '../../components/Button/Button';

import styles from './styles.module.scss';

export default function AddBillPage() {
  const navigate = useNavigate();

  const { billForm } = useContext(AddBillFormContext);

  return (
    <section className={styles.addBillSummary}>
      <h2>New Bill</h2>

      <div className={styles.addBillSummaryDetails}>
        <label>Name:</label>
        <div>{billForm.name}</div>

        <label>Address:</label>
        <div>{billForm.address}</div>

        <label>Hospital:</label>
        <div>{billForm.hospital}</div>

        <label>Service Date:</label>
        <div>{billForm.serviceDate}</div>

        <label>Amount Paid:</label>
        <div>{billForm.amount}</div>
      </div>
      <Button text='Submit' handleClick={() => navigate('/')} />
      <Button text='Edit' handleClick={() => navigate('/add-new-bill')} />
      <Button text='Cancel' handleClick={() => navigate('/')} />
    </section>
  )
}