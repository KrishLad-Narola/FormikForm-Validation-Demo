import React, { Children } from "react";
import { Formik, useFormik } from "formik";

const FormikContext = React.createContext({});


export const Formik = ({children, ...props}) => {

     const FormikStateHelper = useFormik(props);
     return(
        <FormikContext.Provider value={FormikStateHelper}>
            {typeof children === 'function'
             ?children(FormikStateHelper)
             :children
            }
        </FormikContext.Provider>
     );

};
