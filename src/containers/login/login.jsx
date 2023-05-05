import React,{ useState } from 'react';
import './style.css';

const Login = (props) => {
  const {
    isLogin,
  } = props;

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  
  return (
    <form className='login-form'>
      <div className='email-wrapper'>
        <label for="email">
          email
        </label>
        <input
          value= {email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
          className='form-email'
        />
      </div>
      <div className='password-wrapper'>
        <label for="password">password </label>
        <input
          value= {pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
      </div>
      <button>
        {isLogin ? 'LOGIN' : 'SIGNIN'}
      </button>
    </form>
  ) 
};

export default Login;
