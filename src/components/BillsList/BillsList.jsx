import { useContext, useEffect } from 'react';

import { BillsContext } from '../../contexts/BillsContext.jsx';

import medicalBillsData from '../../../data/medical-bills';

import styles from './styles.module.scss';

export default function BillsList() {
  const { bills } = useContext(BillsContext);

  return (
    <ul className={styles.billsList}>
      {bills?.map((bill, index) => (
        <li key={`medical-bill-${index}`} className={styles.billsListItem}>
          <div>{bill.hospital}</div>
          <div>{bill.serviceDate}</div>
          <div>{`$${bill.amount}`}</div>
        </li>
      ))}
    </ul>
  )
}