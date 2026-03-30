import React, { useState } from 'react'                       
import {Field, Formik, useFormik} from "formik";                             // import useFormik hook
import * as Yup from "yup";                                   // import the yup.

 const validateValue = values => {
        const errors = {};
        if(!values.firstName){
            errors.firstName="Required";
        }else if(values.firstName.length > 15){
            errors.firstName="Must be an 15 character or less"
        }
      
         if(!values.lastName){
            errors.lastName="Required";
        }else if(values.lastName.length > 20){
            errors.lastName="Must be an 20 character or less"
        }
        
         if(!values.email){
            errors.email="Required";
        }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
            errors.email="Invalid Email Address"
        }
      return errors;
    
    };


 const SingUpForm = () => {
   
    
    const [values , setValues] = useState();

    const handleChange = event => {
        setValues(prevValues => ({
            ...prevValues,                                                      
            [event.target.name]:event.target.value
        }))
    }
   return(
     <Formik
    //  const formik = useFormik({
    initialValues={{ 
        firstName: '',
         lastName: '',
          email: '' 
        }}
       validationSchema={Yup.object({
         firstName: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('FirstName is Required'),
         lastName: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('LastName is Required'),
         email: Yup.string().email('Invalid email address')
         .required('Email Address is Required'),
       })}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >   
      
      {Formik => (

        <div className='flex w-full justify-center mt-50'>

        <form  className=' flex flex-col w-full items-center max-w-md p-8 bg-white border border-gray-200 shadow-2xl rounded-2xl'
             onSubmit={Formik.handleSubmit}>
           <label htmlFor='firstName' className='block text-gray-700 text-sm font-semibold mb-1'>First Name</label>
           <Field 
            className='w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md 
              focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
            id='firstName'
            name='firstName'
            type='text'
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
            value={Formik.values.firstName}
            {...Formik.getFieldProps('firstName')}
           />
           {/* <ErrorMessage name="firstName" /> */}
           {Formik.touched.firstName && Formik.errors.firstName ? (<div className='text-red-500'>{Formik.errors.firstName}</div>) : null}

           <label htmlFor='lastName'  className='block text-gray-700 text-sm font-semibold mb-1'>Last Name</label>
           <Field 
           className='w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md 
              focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
            id='lastName'
            name='lastName'
            type='text'
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
            value={Formik.values.lastName}
            {...Formik.getFieldProps('lastName')}
           />
           {/* <ErrorMessage name="lastName" /> */}
          {Formik.touched.lastName && Formik.errors.lastName ? (<div className='text-red-500'>{Formik.errors.lastName}</div>) : null}


           <label htmlFor='email'className='block text-gray-700 text-sm font-semibold mb-1'>Email Address:</label>
           <Field 
           className='w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md 
              focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
            id='email'
            name='email'
            type='email'
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
            value={Formik.values.email}
            {...Formik.getFieldProps('email')}
           />
           {/* <ErrorMessage name="email" /> */}
           {Formik.touched.email && Formik.errors.email ? (<div className='text-red-500'>{Formik.errors.email}</div>) : null}
         
         <br />
         
           <button className='bg-blue-500 hover:bg-blue-600 transition-colors text-white w-full  py-2 rounded-lg font-bold shadow-md'
            type='Submit'>Submit</button>
        </form>
        </div>

        )}

    </Formik>
    )
} 
export default SingUpForm