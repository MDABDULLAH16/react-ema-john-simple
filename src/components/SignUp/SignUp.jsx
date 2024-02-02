import React, { useContext } from "react";
import "./SignUp.css";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const { createUser, userDisplayName } = useContext(AuthContext);

  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    console.log(name, email, password);
    createUser(email, password)
      .then((result) => {
        const createUser = result.user;
        console.log(createUser);
        handleDisplayName(createUser, name);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  const handleDisplayName = (user, name) => {
    updateProfile(user, {
      displayName: name,
    });
  };

  return (
    <div className='sign-up-container'>
      <form onSubmit={handleCreateUser} className='sign-up-form'>
        <h2>Sign Up</h2>

        <div className='form-group'>
          <label for='name'>Name:</label>
          <input type='text' id='name' name='name' required />
        </div>
        <div className='form-group'>
          <label for='email'>Email:</label>
          <input type='email' id='email' name='email' required />
        </div>
        <div className='form-group'>
          <label for='password'>Password:</label>
          <input type='password' id='password' name='password' required />
        </div>

        <button className='btn-signUp' type='submit'>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
