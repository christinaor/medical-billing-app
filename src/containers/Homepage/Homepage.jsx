import BillsContent from '../../components/BillsContent/BillsContent.jsx';
import Header from '../../components/Header/Header.jsx';

import styles from './styles.module.scss';

export default function Homepage({ handleAddBill }) {
  return (
    <section className={styles.homepage}>
      <Header />
      <BillsContent 
        handleAddBill={handleAddBill}
      />
    </section>
  )
}
