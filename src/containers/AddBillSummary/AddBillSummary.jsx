import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AddBillFormContext } from '../../contexts/AddBillFormContext.jsx';
import { BillsContext } from '../../contexts/BillsContext.jsx';

import Button from '../../components/Button/Button';

import styles from './styles.module.scss';

export default function AddBillPage() {
  const navigate = useNavigate();

  const { bills, updateBills } = useContext(BillsContext);
  const { billForm, updateBillForm } = useContext(AddBillFormContext);

  const onSubmit = () => {
    updateBills({...billForm});
    navigate('/');
  };

  const onCancel = () => {
    updateBillForm({
      name: '',
      address: '',
      hospital: '',
      serviceDate: '',
      amount: '',
      // billUpload: '',
    })
    navigate('/');
  };

  useEffect(() => {
    if (!bills) {
      updateBills([]);
    }
  }), [bills, updateBills];

  return (
    <section className={styles.addBillSummary}>
      <h2>Summary of New Bill</h2>

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
        <div>${billForm.amount}</div>
      </div>

      <div>Are you sure you want to submit this medical bill?</div>

      <Button text='Submit' handleClick={onSubmit} />
      <Button text='Edit' handleClick={() => navigate('/add-new-bill')} />
      <Button text='Cancel' handleClick={onCancel} />
    </section>
  )
}