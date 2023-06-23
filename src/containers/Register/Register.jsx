import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../contexts/UserContext.jsx';

import Button from '../../components/Button/Button.jsx';
import Header from '../../components/Header/Header.jsx';

import styles from './styles.module.scss';

export default function Register(props) {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const { user, updateUser } = useContext(UserContext);

  const [registerForm, setRegisterForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const onRegister = (registrationData) => {
    console.log(registrationData)

    const registerUser = async () => {
      try {
        const response = await fetch('/authorize/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            firstName: registrationData.firstName,
            lastName: registrationData.lastName,
            email: registrationData.email,
            password: registrationData.password,
          })
        });
        
        if (response.ok) {
          const userId = await response.json();
          console.log(userId)
          updateUser(userId);
          navigate('/', { replace: true });
        }
        console.log('fetching with registration data')
      } catch(error) {
        console.error(`Could not authorize user: ${error}`);
      }
    }

    registerUser();
  };

  useEffect(() => {
    if (!user) {
      updateUser({
        userId: 0,
      });
    }
  }, [user, updateUser]);

  return (
    <div className={styles.register}>
      <Header />
      <section className={styles.registerDetails}>
        <h1 className={styles.registerTitle}>Register Here</h1>
        <div className={styles.registerSubtitle}>Please fill out all fields.</div>
        <form className={styles.registerForm} onSubmit={handleSubmit(onRegister)}>
          <label htmlFor='firstName'>First Name:</label>
          <input 
            name='firstName' 
            defaultValue={registerForm.firstName}
            type='text'
            {...register('firstName', {value: registerForm.firstName, required: true, maxLength: 80})}
          />

          <label htmlFor='lastName'>Last Name:</label>
          <input 
            name='lastName' 
            defaultValue={registerForm.lastName}
            type='text'
            {...register('lastName', {value: registerForm.lastName, required: true, maxLength: 100})}
          />
          
          <label htmlFor='email'>Email:</label>
          <input 
            name='email' 
            defaultValue={registerForm.email}
            type='email'
            {...register('email', {value: registerForm.email, required: true, maxLength: 100})}
          />

          <label htmlFor='Password'>Password:</label>
          <input 
            name='password' 
            defaultValue={registerForm.password}
            type='password'
            {...register('password', {value: registerForm.password, required: true, minLength: 8})}
          />

          {(errors.firstName || errors.lastName || errors.email || errors.password) && <span className={styles.error}>All fields are required</span>}

          {errors.password && <span className={styles.error}>Password must be at least 8 characters</span>}

          <Button className={styles.registerButton} text='Register' type='submit' />
        </form>
      </section>
    </div>
  )
}
