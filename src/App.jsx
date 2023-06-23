import { useContext, useState, useEffect } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';

import { AddBillFormProvider } from './contexts/AddBillFormContext.jsx';
import { BillsProvider } from './contexts/BillsContext.jsx';
import { UserContext } from './contexts/UserContext.jsx';

import AddBillFormPage from './containers/AddBillFormPage/AddBillFormPage.jsx';
import AddBillSummary from './containers/AddBillSummary/AddBillSummary.jsx';
import Homepage from './containers/Homepage/Homepage.jsx';
import Login from './containers/Login/Login.jsx';
import Register from './containers/Register/Register.jsx';
import NotFound from './containers/NotFound/NotFound.jsx';

import './App.scss';

export default function App() {
  const [appLoaded, setAppLoaded] = useState(false);

  const navigate = useNavigate();

  const { user } = useContext(UserContext);
  console.log(user)

  const handleAddBill = () => {
    //navigate to add bill form
    console.log('Navigating to add bill form')
    navigate('/add-new-bill');
  }

  useEffect(() => {
    setAppLoaded(true);
    if (user === 0) {
      navigate('/login', { replace: true });
    }
  }, [navigate, user])

  if (appLoaded) {
    return (
      <div>
        <BillsProvider>
        <AddBillFormProvider>
          <Routes>
            
            <Route
              path='/'
              element={
                <Homepage 
                  handleAddBill={handleAddBill}
                />}
            />
            <Route
              path='/add-new-bill/summary'
              element={<AddBillSummary />}
            />
            <Route
              path='/add-new-bill'
              element={<AddBillFormPage />}
            />
            <Route
              path='/login'
              element={
                <Login />}
            />
            <Route
              path='/register'
              element={
                <Register />}
            />
            <Route
              path='*'
              element={<NotFound />}
            />
          </Routes>
        </AddBillFormProvider>
        </BillsProvider>
      </div>
    )
  } else {
    return (
      <div>Medical Billing App is loading...</div>
    )
  }
}
