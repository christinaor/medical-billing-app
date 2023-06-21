import { useState, useEffect } from 'react';
import { useNavigate, Routes, Route, Navigate } from 'react-router-dom';

import AddBillFormPage from './containers/AddBillFormPage/AddBillFormPage.jsx';
import AddBillSummary from './containers/AddBillSummary/AddBillSummary.jsx';
import Homepage from './containers/Homepage/Homepage.jsx';
import NotFound from './containers/NotFound/NotFound.jsx';

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.scss'

export default function App() {
  const [appLoaded, setAppLoaded] = useState(false);

  const navigate = useNavigate();

  const handleAddBill = () => {
    //navigate to add bill form
    console.log('Navigating to add bill form')
    navigate('/add-new-bill');
  }

  useEffect(() => {
    setAppLoaded(true);
    // navigate('/', { replace: true })
  }, [])

  if (appLoaded) {
    return (
      <div>
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
            path='*'
            element={<NotFound />}
          />
        </Routes>
      </div>
    )
  } else {
    return (
      <div>Medical Billing App is loading...</div>
    )
  }
}
