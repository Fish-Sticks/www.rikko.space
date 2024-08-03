import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useState } from "react";
import { useFormik } from "formik";
import { registerSchema } from "../../schemas/registerSchema";

export default function RegisterPage() {
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            termsOfService: false,
        },
        onSubmit: handleSubmitRegister,
        validationSchema: registerSchema,
    })

    function handleSubmitRegister(){
        console.log("Username: ", formik.values.username);
        console.log("Email: ", formik.values.email);
        console.log("Password: ", formik.values.password);
    }

    return (
    <main className="min-h-screen grid grid-rows-[auto,1fr,auto] bg-gradient-to-l from-orange-400 to-orange-500">
        <NavBar/>
        
        <section className="relative overflow-hidden md:grid content-center grid-cols-[1fr,auto] xl:grid-cols-[0.65fr,auto]">
            <div className="flex flex-col my-auto items-center justify-center">

                <div className="z-50 bg-white xl:w-1/2 p-4 rounded-lg m-auto">
                <div className="flex flex-col items-center justify-center my-[.5em]">
                <h1 className="text-2xl md:text-5xl  text-black font-bold">Welcome to MixList</h1>
                <p className="text-sm mt-2 md:text-lg  text-black ">The best way to organize your shopping list</p>
                </div>
                    <div className=" ">
                        <div className="hidden">
                            <p>Dados inválidos!</p>
                        </div>
                        
                        <div className="flex flex-col justify-between">
                        <RegisterForm formik={formik}/>
                        </div>
                    </div>
                </div>
            </div>
            
            <div>
                <img className="absolute right-[15%] -top-[0vh] w-[70%]
                md:w-[100%] md:-right-[40%]  md:top-[10vh]
                lg:w-[90%]  lg:-right-[30%]  lg:top-[5vh] 
                xl:w-[55%]  xl:-right-[2%]  xl:top-[10vh] 
                2xl:w-[40%] 2xl:right-0      2xl:top-0"
                src="/shopping-list-web-app/img/casal-inicial.svg" draggable="false"  alt="Inicials.svg" />
            </div>
        </section>
        <Footer/>
    </main>)
}