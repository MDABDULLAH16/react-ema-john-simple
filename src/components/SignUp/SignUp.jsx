import React, { useContext } from "react";
import "./SignUp.css";
import { AuthContext } from "../../Provider/AuthProvider";
import { sendEmailVerification, updateProfile } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const confirm = form.confirm.value;

    if (password !== confirm) {
      toast("password does not match");
      return;
    } else if (password.length < 6) {
      toast("password must will be least 6 charecters");
      return;
    }
    console.log(name, email, password);
    createUser(email, password)
      .then((result) => {
        const createUser = result.user;
        handleVarifiedEmail(result.user);
        handleDisplayName(createUser, name);
        console.log(createUser);
        toast("User create Done!!");
        form.reset();
      })
      .catch((error) => {
        console.error(error.message);
        toast(error.message);
        form.reset();
      });
  };

  const handleDisplayName = (user, name) => {
    updateProfile(user, {
      displayName: name,
    });
  };
  const handleVarifiedEmail = (email) => {
    sendEmailVerification(email)
      .then((result) => {
        console.log(result);
        toast("Check Your Email Please!!");
      })
      .catch((error) => {
        toast(error.message);
      });
  };

  return (
    <div className='sign-up-container'>
      <form onSubmit={handleCreateUser} className='sign-up-form'>
        <h2>Sign Up</h2>
        <Toaster></Toaster>
        <div className='form-group'>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' name='name' required />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' name='email' required />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password:</label>
          <input type='password' id='password' name='password' required />
        </div>
        <div className='form-group'>
          <label htmlFor='confirm'>Confirm Password:</label>
          <input type='password' id='confirm' name='confirm' required />
        </div>
        <button className='btn-signUp' type='submit'>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
