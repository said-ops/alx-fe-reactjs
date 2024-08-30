import React from 'react'
import {Formik ,Field,Form,ErrorMessage} from 'formik'
import * as Yup from 'yup' 

function FormikForm() {

    const validationSchema = Yup.object({
        email:Yup.string().email('Invalid Email Address').required('Required'),
        username:Yup.string().max(25,'must be 25 characters or less').required('Required'),
        password:Yup.string().min(8,'must be 8 characters or more').required('Required')
    })

  return (
    <>
        <h1>Formik form</h1>
    <Formik
        initialValues={{email:'',username:'',password:''}}
        validationSchema={validationSchema}
        onSubmit={values=>{console.log(values)
        }}
    >
       {
         ()=>(
            <Form >
            <label htmlFor='username'>Username</label>
            <Field name='username' id='username' type='text'/>
            <ErrorMessage name='username'/>

            <label htmlFor='email'>Email</label>
            <Field name='email' id='email' type='email'/>
            <ErrorMessage name='email'/>

            <label htmlFor='password'>Password</label>
            <Field name='password' id='password' type='password'/>
            <ErrorMessage name='password'/>

            <button type='submit'>submit</button>
        </Form>
         )
       }
    </Formik>
    </>
  );
}

export default FormikForm