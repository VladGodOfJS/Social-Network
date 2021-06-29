import React from "react";
import s from "./FormControl.module.scss";

export const Textarea =({input,meta, ...props})=>{
   return(
       <div className={meta.touched && meta.error?s.form_control+' '+ s.error:s.form_control   } >
           <textarea  {...input} {...props}/>
           {meta.touched && meta.error?<span className={s.span}>{meta.error}</span>:""}
       </div>
   );
}


export const Input =({input,meta, ...props})=>{
    return(
        <div className={meta.touched && meta.error?s.form_control+' '+ s.error:s.form_control   } >
            <input  {...input} {...props}/>
            {meta.touched && meta.error?<span className={s.span}>{meta.error}</span>:""}
        </div>
    );
 }

