import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button/Button';

import styles from './styles.module.scss';

export default function AddBillPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.addBillSummary}>
      <Button text='Submit' handleClick={() => navigate('/')} />
      <Button text='Edit' handleClick={() => navigate('/add-new-bill')} />
      <Button text='Cancel' handleClick={() => navigate('/')} />
    </div>
  )
}