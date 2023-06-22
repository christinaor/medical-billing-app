import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { AddBillFormContext } from '../../contexts/AddBillFormContext.jsx';

import Button from '../../components/Button/Button';

import styles from './styles.module.scss';

export default function AddBillFormPage() {
  const [selectedFile, setSelectedFile] = useState(null);

  const navigate = useNavigate();

  const { billForm, updateBillForm } = useContext(AddBillFormContext);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleFileUpload = (uploadedFile) => {
    const file = uploadedFile[0];
    setSelectedFile(file);
    console.log(file)

    const reader = new FileReader();
    reader.onload = () => {
      const imageUrl = reader.result;
      setSelectedFile(imageUrl);
    };
    reader.readAsDataURL(file);
  };

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

  useEffect(() => {
    if (billForm.billUpload) {
      handleFileUpload(billForm.billUpload);
    }
  }, [billForm.billUpload]);

  return (
    <div className={styles.addBillFormPage}>
      <h2>Add New Bill</h2>
      <div>Please fill out all fields.</div>

      <form className={styles.addBillForm} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='name'>Name:</label>
        <input 
          name='name' 
          defaultValue={billForm.name}
          type='text'
          {...register('name', {value: billForm.name, required: true, maxLength: 100})}
        />
        {errors.name && <span className={styles.error}>Field required</span>}

        <label htmlFor='address'>Address:</label>
        <input
          name='address'
          defaultValue={billForm.address}
          type='text'
          {...register('address', {required: true, maxLength: 120})}
        />
        {errors.address && <span className={styles.error}>Field required</span>}

        <label htmlFor='hospital'>Hospital:</label>
        <input
          name='hospital'
          defaultValue={billForm.hospital}
          type='text'
          {...register('hospital', {required: true, maxLength: 150})}
        />
        {errors.hospital && <span className={styles.error}>Field required</span>}

        <label htmlFor='serviceDate'>Service Date:</label>
        <input
          name='serviceDate'
          defaultValue={billForm.serviceDate}
          type='date'
          {...register('serviceDate', {required: true, maxLength: 12})}
        />
        {errors.serviceDate && <span className={styles.error}>Field required</span>}

        <label htmlFor='amount'>Bill Amount:</label>
        <input
          name='amount'
          defaultValue={billForm.amount}
          type='number'
          {...register('amount', {required: true, maxLength: 15})}
        />
        {errors.amount && <span className={styles.error}>Field required</span>}

        <label htmlFor='billUpload'>Upload Bill:</label>
        <input
          className={styles.billUploadInput}
          name='billUpload'
          // defaultValue={billForm.billUpload[0]?.name || ''}
          type='file'
          // onChange={handleFileUpload}
          {...register('billUpload', {required: true})}
        />
        {errors.billUpload && <span className={styles.error}>Upload required</span>}
        {/* {selectedFile && (
          <div>
            <h4>Selected Image:</h4>
            <img src={selectedFile} alt="Selected" />
          </div>
        )} */}

        <div className={styles.formButtons}>
          <Button text='Review' type='submit' />
          <Button text='Cancel' handleClick={onCancel} />
        </div>
      </form>
    </div>
  )
}