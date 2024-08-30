import React from 'react'
import {Formik ,Field,Form,ErrorMessage} from 'formik'
import * as Yup from 'yup' 

function FormikForm() {

    

  return (
    <>
        <h1>Formik form</h1>
    <Formik
        initialValues={{email:'',username:'',password:''}}
        validationSchema={Yup.object({
          email:Yup.string().required('Required').email('Invalid Email Address'),
          username:Yup.string().required('Required').max(25,'must be 25 characters or less'),
          password:Yup.string().required('Required').min(8,'must be 8 characters or more')
      })}
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