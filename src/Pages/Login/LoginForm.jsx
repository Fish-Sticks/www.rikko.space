import { Link } from "react-router-dom"

export default function LoginForm({formik}) {

    const {values,errors,handleChange,touched,isSubmitting,onBlur,handleSubmit} = formik;

    return (
        <form onSubmit={handleSubmit} autoComplete="off" className="flex flex-col gap-3 p-4 pb-0">
            <div>
                <label htmlFor="email" className="ml-2 ">Email</label>
                <input placeholder="Enter your Email" 
                id="email"
                value={values.email} 
                onChange={handleChange} 
                type="email" 
                className={`border ${errors.email && touched.email ? 'border-red-700' :'border-zinc-700'} p-3 w-full text-zinc-900 bg-white rounded-2xl`}/>

                {errors.email && touched.email && <span className="text-red-700 text-sm md:text-[0.75rem] text-left mt-[0.25rem]"> {errors.email} </span>}
            </div>
            <div>
                <label htmlFor="password" className="ml-2">Password</label>
                <input 
                placeholder="Enter your Password" 
                id="password"
                value={values.password} 
                onChange={handleChange} 
                type="password" 
                className={`border ${errors.password && touched.password ? 'border-red-700' :'border-zinc-700'} p-3 w-full text-zinc-900 bg-white rounded-2xl`} 
                data-type="password"/>

                {errors.password && touched.password && <span className="text-red-700 text-sm md:text-[0.75rem] text-left mt-[0.25rem]"> {errors.password} </span>}
            </div>

            <div className="flex md:justify-normal justify-between items-center mt-2">
                <Link className="text-black hidden lg:!block hover:text-black" to={"#forgot"}>Forgot Password?</Link>
                <button type="submit" disabled={isSubmitting} className={`bg-black ${isSubmitting? 'opacity-75' : ''} cursor-pointer w-full lg:w-1/3 md:ml-auto text-white font-bold`}>
                    Login
                </button>
            </div>
            <div className="flex justify-end items-center">
                <Link draggable="false" className="text-black lg:hidden hover:text-black" to={"#forgot"}>Forgot Password?</Link>
                <Link draggable="false" to={"/shopping-list-web-app/register"} className=" p-1 text-black hover:text-black">Register</Link>
            </div>  
            
        </form>)

}

