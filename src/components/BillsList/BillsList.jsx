import medicalBillsData from '../../../data/medical-bills';

import styles from './styles.module.scss';

export default function BillsList() {
  return (
    <ul className={styles.billsList}>
      {medicalBillsData?.map(bill => (
        <li key={`medical-bill-${bill.id}`} className={styles.billsListItem}>
          <div>{bill.hospital}</div>
          <div>{bill.serviceDate}</div>
          <div>{`$${bill.amount}`}</div>
        </li>
      ))}
    </ul>
  )
}