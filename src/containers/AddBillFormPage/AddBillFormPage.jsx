import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { AddBillFormContext } from '../../contexts/AddBillFormContext.jsx';

import Button from '../../components/Button/Button';

import styles from './styles.module.scss';

export default function AddBillFormPage() {
  const navigate = useNavigate();

  const { billForm, updateBillForm } = useContext(AddBillFormContext);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = newBillData => {
    updateBillForm(newBillData);
    navigate('./summary');
    console.log(newBillData);
  };
  console.log(errors);

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
  }

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
      <div>Fill out all fields.</div>

      <form className={styles.addBillForm} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='name'>Name:</label>
        <input 
          name='name' 
          defaultValue={billForm.name}
          type='text'
          {...register('name', {value: billForm.name, required: true, maxLength: 100})}
        />
        {errors.name && <span className={styles.error}>This field is required</span>}

        <label htmlFor='address'>Address:</label>
        <input
          name='address'
          defaultValue={billForm.address}
          type='text'
          {...register('address', {required: true, maxLength: 120})}
        />
        {errors.address && <span className={styles.error}>This field is required</span>}

        <label htmlFor='hospital'>Hospital:</label>
        <input
          name='hospital'
          defaultValue={billForm.hospital}
          type='text'
          {...register('hospital', {required: true, maxLength: 150})}
        />
        {errors.hospital && <span className={styles.error}>This field is required</span>}

        <label htmlFor='serviceDate'>Service Date:</label>
        <input
          name='serviceDate'
          defaultValue={billForm.serviceDate}
          type='date'
          {...register('serviceDate', {required: true, maxLength: 12})}
        />
        {errors.serviceDate && <span className={styles.error}>This field is required</span>}

        <label htmlFor='amount'>Bill Amount:</label>
        <input
          name='amount'
          defaultValue={billForm.amount}
          type='number'
          {...register('amount', {required: true, maxLength: 15})}
        />
        {errors.amount && <span className={styles.error}>This field is required</span>}

        {/* { Bill Upload option here } */}
        <div className={styles.formButtons}>
          <Button text='Review' type='submit' />
          <Button text='Cancel' handleClick={onCancel} />
        </div>
      </form>
    </div>
  )
}