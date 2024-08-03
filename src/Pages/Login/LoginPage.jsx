import { useFormik } from "formik";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import LoginForm from "./LoginForm";
import { useState } from "react";
import { loginSchema } from "../../schemas/loginSchema";

export default function LoginPage() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginSchema,
        handleSubmitLogin,
    })

    function handleSubmitLogin(){
        console.log("Email: ", email);
        console.log("Password: ", password);
    }

    return (
    <main className="min-h-screen grid grid-rows-[auto,1fr,auto] bg-gradient-to-l from-orange-400 to-orange-500">
        <NavBar/>
        <section className="relative overflow-hidden md:grid content-center grid-cols-[1fr,auto] xl:grid-cols-[0.65fr,auto]">
            <div className="flex flex-col my-auto items-center justify-center">

                <div className="z-50 bg-white md:w-1/2 p-4 rounded-lg m-auto">
                <div className="flex flex-col items-center justify-center my-[.5em] tracking-wide">
                <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-4xl text-black font-bold">Welcome to MixList</h1>
                <p className="text-sm mt-2 lg:text-lg text-black">Log in to access your shopping list</p>
                </div>
                    <div className=" ">
                        <div className="hidden">
                            <p>Dados inválidos!</p>
                        </div>
                        
                        <div className="flex flex-col">
                            <LoginForm formik={formik}/>
                        </div>
                    </div>
                </div>
            </div>
            
            <div>
                <img className="absolute -right-[50%] top-[20vh]
                md:w-[100%] md:-right-[55%]  md:top-[10vh]
                lg:w-[90%]  lg:-right-[45%]  lg:top-[5vh] 
                xl:w-[55%]  xl:-right-[10%]  xl:top-[10vh] 
                2xl:w-[40%] 2xl:right-0      2xl:top-0"
                src="/shopping-list-web-app/img/Inicial.svg" draggable="false"  alt="inicial.svg" />
            </div>
        </section>
        <Footer/>
    </main>)
}