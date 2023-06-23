import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../contexts/UserContext.jsx';

import Button from '../../components/Button/Button.jsx';
import Header from '../../components/Header/Header.jsx';

import styles from './styles.module.scss';

export default function Login(props) {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const { user, updateUser } = useContext(UserContext);

  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const onLogin = loginData => {
    console.log(loginData)
    const authorizeUser = async () => {
      try {
        const response = await fetch('/authorize/login', {
          method: 'POST',
          header: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: loginData.email,
            password: loginData.password,
          })
        });
        
        if (response.ok) {
          const userId = await response.json();
          console.log(userId)
          updateUser(userId);
          navigate('/', { replace: true });
        }
        console.log('fetching with login data')
      } catch(error) {
        console.error(`Could not authorize user: ${error}`);
      }
    }

    authorizeUser();
  }

  const onRegister = () => {
    navigate('/register', { replace: true });
  };

  useEffect(() => {
    if (!user) {
      updateUser({
        userId: 0,
      });
    }
  }, [user, updateUser]);

  return (
    <div className={styles.login}>
      <Header />
      <section className={styles.loginDetails}>
        <h1 className={styles.loginTitle}>Login Here</h1>
        <form className={styles.loginForm} onSubmit={handleSubmit(onLogin)}>
          <label htmlFor='email'>Email:</label>
          <input 
            name='email' 
            defaultValue={loginForm.email}
            type='email'
            {...register('email', {value: loginForm.email, required: true, maxLength: 100})}
          />
          {/* {errors.email && <span className={styles.error}>Email required</span>} */}

          <label htmlFor='Password'>Password:</label>
          <input 
            name='password' 
            defaultValue={loginForm.password}
            type='password'
            {...register('password', {value: loginForm.password, required: true, maxLength: 100})}
          />
          {errors.email && errors.password && <span className={styles.error}>Email and password required</span>}
          {errors.email && !errors.password && <span className={styles.error}>Email required</span>}
          {errors.password && !errors.email && <span className={styles.error}>Password required</span>}

          <Button className={styles.loginButton} text='Login' type='submit' />
        </form>

        <div className={styles.registerLink} onClick={onRegister}>New to MBA? Register here.</div>
      </section>
    </div>
  )
}
