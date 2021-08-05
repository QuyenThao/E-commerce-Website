import React from 'react';
import RegisterForm from '../RegisterForm/index';

function Register() {
  const handleSubmit = (values) => {
    console.log('Form Submit: ', values);
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
