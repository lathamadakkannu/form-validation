import { useForm } from "react-hook-form"

function Register(){
    const{register,handleSubmit,formState:{errors}}= useForm()
    console.log(errors);

    return(

        <div>

            <section class="Registeration-form">
                <div class="container">
                    <div class="row">

                        <form onSubmit={handleSubmit((data)=>{
                        console.log(data);
                    })}>
                            <div class="reg-form">
                                <h1>Registration Form</h1>

                                <div class="type">
                                    <input id="firstname" type="text" {...register("fname",{required:"First name is required"})}placeholder="First Name" />
                                    {errors.fname && <span>{errors.fname.message}</span>}

                                </div>

                                <div class="type">
                                    <input id="lastname" type="text" {...register("lname",{required:"Last name is required"})}placeholder="Last Name" />
                                    {errors.lname && <span>{errors.lname.message}</span>}
                                   
                                </div>

                                <div class="type">
                                    <input id="email" type="text" {...register("email",{required:"Email is required"})}placeholder="Email Address" />
                                    {errors.email && <span>{errors.email.message}</span>}

                                </div>
                                
                                <div class="type">
                                    <input id="password" type="password" {...register("pw",{required:"Password is required",minLength:{value:8,message: "length should be 8"}})}placeholder="Password" />
                                    {errors.pw && <span>{errors.pw.message}</span>}

                                </div>

                                    <button  type="submit" id="butn">Register</button>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            
        </div>
    )


}
export default Register;
