import BillsList from '../../components/BillsList/BillsList.jsx';
import Button from "../../components/Button/Button.jsx";
import Header from '../../components/Header/Header.jsx';

import styles from './styles.module.scss';

export default function Homepage(props) {
  const {
    handleAddBill,
  } = props;

  return (
    <section className={styles.homepage}>
      <Header />
      <Button 
        handleClick={handleAddBill}
        text='+ Add Bill'
      />
      <BillsList />
    </section>
  )
}
