import { useContext, useEffect } from 'react';

import { BillsContext } from '../../contexts/BillsContext.jsx';

import styles from './styles.module.scss';

export default function BillsList() {
  const { bills } = useContext(BillsContext);

  return (
    <ul className={styles.billsList}>
      <li key={`medical-bill-header`} className={styles.billsListHeader}>
        <div>Service Date</div>
        <div>Hospital</div>
        <div>Amount Paid</div>
      </li>
      {bills?.map((bill, index) => (
        <li key={`medical-bill-${index}`} className={styles.billsListItem}>
          <div>{bill.serviceDate}</div>
          <div>{bill.hospital}</div>
          <div className={styles.billsListAmount}>{`$${bill.amount}`}</div>
        </li>
      ))}
    </ul>
  )
}