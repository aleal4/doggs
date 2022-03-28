import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import Error from '../Helper/Error';
import styles from './LoginForm.module.css';
import stylesBtn from '../Forms/Button.module.css';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animateLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="User Name" type="text" name={'username'} {...username} />
        <Input
          label="Password"
          type="password"
          name={'password'}
          {...password}
        />
        {loading ? <Button>Loading...</Button> : <Button>Enter</Button>}
        <Error error={error} />
      </form>
      <Link className={styles.lost} to="/login/forgot">
        Forget your Password?
      </Link>
      <div className={styles.register}>
        <h2 className={styles.subtitle}>Register</h2>
        <p>No Account? Register!</p>
        <Link className={stylesBtn.button} to="/login/create">
          Sign Up
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
