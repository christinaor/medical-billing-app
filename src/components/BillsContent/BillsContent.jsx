import BillsList from '../../components/BillsList/BillsList.jsx';
import Button from "../../components/Button/Button.jsx";

import styles from './styles.module.scss';

export default function BillsContent({ handleAddBill }) {
  return (
    <div className={styles.billsContent}>
      <Button 
        className={styles.addBillButton}
        handleClick={handleAddBill}
        text='+ Add Bill'
      />
      <h2 className={styles.billsContentTitle}>Your Medical Bills</h2>
      <BillsList />
    </div>
  )
}