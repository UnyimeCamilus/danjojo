import React from "react";
import man from "../assets/man.svg"
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from "react-router-dom";

const Email = () =>{
    const EmailSchema = Yup.object().shape({
        
        email: Yup.string().email('Invalid email').required('Required'),
      });
    return(
        <div className="flex bg-[#EAE4F4] justify-between pl-16 pr-28 pb-32 pt-12">
            <div className="border border-transparent rounded-md pl-8 pt-8 w-[480px] bg-[#fff]">
                <h2 className="font-Montserrat font-semibold text-[32px] text-[#423055]">
                    Good choice!
                </h2>
                <p className="text-[20px] text-[#A39DA9] font-normal font-Montserrat w-[300px] pb-4 leading-[24px]">
                    Enter your email and begin your journey to financial freedom
                </p>

                 <Formik
                initialValues={{
                    
                    email: '',
                }}
                validationSchema={EmailSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                }}
     >
        {({ errors, touched })=>( 
        <Form>
          <label className="text-[#BBBBBB] font-Montserrat font-normal text-[14px]">
             Email
          </label>
          <div className="flex w-full">
            <Field 
            name="email" 
            type="email" 
            className=" border p-2 rounded border-#DAD7DD w-[405px]"
            />
          </div>
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <div className="flex gap-40 mt-8">
            
            <button>Got an account? <span className="text-[#7F00FF]">Sign in</span> </button>
            <button className="border bg-[#7F00FF] p-2 text-[#fff] rounded-md">Continue</button>
            
          </div>
        </Form>
       )} 
     </Formik> 
                
            </div>
            <img src={man} alt="#" />
        </div>
    )
};
export default Email