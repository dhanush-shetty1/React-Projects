import {useForm} from "react-hook-form"
import * as yup from 'yup'
export const Form =()=>{
    const {register,handleSubmit}=useForm();
    const schema=yup.object()
    const onSubmit=(data)=>{
        console.log(data);
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Username"{...register("fullName")} /><br/>
            <input type="text" placeholder="Email" {...register("email")} /><br/>
            <input type="number" placeholder="Age" {...register("Age")} /><br/>
            <input type="password" placeholder="Password"{...register("Password")} /><br/>
            <input type="password" placeholder="Confirm Password"{...register("confirmPassword")} /><br/>
            <input type="submit" />
        </form>
    )
}