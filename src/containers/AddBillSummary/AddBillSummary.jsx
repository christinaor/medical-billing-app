import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AddBillFormContext } from '../../contexts/AddBillFormContext.jsx';
import { BillsContext } from '../../contexts/BillsContext.jsx';

import Button from '../../components/Button/Button';

import styles from './styles.module.scss';

export default function AddBillSummary() {
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

        <label>Uploaded Medical Bill:</label>
        <div>{billForm.billUpload[0]?.name}</div>
      </div>

      <div className={styles.prompt}>Are you sure you want to submit this medical bill?</div>

      <div className={styles.addBillSummaryButtons}>
        <Button className={styles.addBillSummaryButton} text='Submit' handleClick={onSubmit} />
        <Button className={styles.addBillSummaryButton} text='Edit' handleClick={() => navigate('/add-new-bill')} />
        <Button className={styles.addBillSummaryButton} text='Cancel' handleClick={onCancel} />
      </div>
      
    </section>
  )
}