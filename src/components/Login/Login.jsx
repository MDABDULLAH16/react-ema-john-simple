import React from "react";

const Login = () => {
  return (
    <div className='sign-up-container'>
      <form className='sign-up-form'>
        <h2>Log In</h2>

        <div className='form-group'>
          <label for='email'>Email:</label>
          <input type='email' id='email' name='email' required />
        </div>
        <div className='form-group'>
          <label for='password'>Password:</label>
          <input type='password' id='password' name='password' required />
        </div>
        <div className='form-group'>
          <label for='confirm'>Confirm Password:</label>
          <input type='password' id='password' name='confirm' required />
        </div>
        <button className='btn-signUp' type='submit'>
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
