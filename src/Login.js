import { useForm } from "react-hook-form"

function Login(){
    const{register,handleSubmit,formState:{errors}}= useForm()
    console.log(errors);

    return(

        <div>

            <section class="login-form">
                <div class="container">
                    <div class="row">

                        <form onSubmit={handleSubmit((data)=>{
                        console.log(data);
                    })}>
                            <div class="log-form">
                                <h1>Login Form</h1>

                                <div class="type">
                                    <input id="name" type="text" {...register("name",{required:"Name is required"})}placeholder="Enter Your Name" />
                                    {errors.name && <span className="style">{errors.name.message}</span>}

                                </div>

                                <div class="type">
                                    <input id="email" type="text" {...register("email",{required:"Email is required"})}placeholder="Email Address" />
                                    {errors.email && <span className="style">{errors.email.message}</span>}

                                </div>
                                
                                <div class="type">
                                    <input id="password" type="password" {...register("pw",{required:"Password is required",minLength:{value:8,message: "length should be 8"}})}placeholder="Password" />
                                    {errors.pw && <span className="style">{errors.pw.message}</span>}

                                </div>

                                    <button  type="submit" id="butn">Login</button>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            
        </div>
    )


}
export default Login;
