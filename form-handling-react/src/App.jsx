import { useState } from 'react'
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm';
import { Formik } from 'formik';

function App() {
  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto', fontFamily:'Arial' }}>
        <h1>User Registration</h1>

        {/*Controlled Components */}
        <RegistrationForm />

        <h2 style={{ margin: '2rem 0' }} />

        {/* Formik and Yup */}
        <FormikForm />
    </div>
  );
}

export default App;
