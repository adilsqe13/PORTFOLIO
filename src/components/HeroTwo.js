import React, {useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import userContext from "../CONTEXT/context/userContext";



export default function HeroTwo(){
    const { fetchApi, userData } = useContext(userContext);

    useEffect(()=>{
        fetchApi();
    },[]);
    
    return(
        <>
          <section className="md:pt-52 pt-36 h-auto relative flex items-center background-effect overflow-hidden 
            before:content-[''] before:absolute before:-z-1 sm:before:-bottom-80 before:-bottom-40 before:right-0 before:left-0 before:mx-auto before:rounded-full before:bg-amber-500 sm:before:w-[40rem] before:w-[20rem] sm:before:h-[40rem] before:h-[20rem]" id="home">
            <div className="container relative z-1">
                <div className="grid grid-cols-1 text-center mt-5 relative">
                    <h4 className="font-bold lg:text-[40px] text-3xl lg:leading-normal leading-normal mb-4">{userData && userData.about.name}</h4>
                    <h4 className="font-semibold leading-normal text-[22px] mb-5">I'm a {userData && userData.about.title}
                    </h4>
                    <p className="text-slate-400 max-w-xl mx-auto">{userData && userData.about.description}</p>

                    <div className="mt-6">
                        <Link to="" className="btn rounded-md bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white" type="submit">Hire me</Link>
                    </div> 

                    <img src="/images/framework/React-05.png" className="animate-[spin_20s_linear_infinite] absolute h-11 w-11 -top-16 left-0 right-0 mx-auto" alt=""/>
                </div>

                <div className="flex justify-center text-center relative">
                    <div className="relative">
                        <img src="/images/hero/1.png" className="max-w-lg" alt=""/>

                        <div className="absolute top-56 ltr:md:-left-5 ltr:left-24 rtl:md:-right-5 rtl:right-24 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-44 text-center">
                            <h6 className="font-semibold">{userData && userData.about.title}</h6>
                            <h6 className="text-sm text-slate-400 mt-1">(2016 - 2020)</h6>
                        </div>

                        <div className="absolute bottom-20 ltr:md:-right-5 ltr:right-24 rtl:md:-left-5 rtl:left-24 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-44 text-center">
                            <h6 className="font-semibold">Freelancer</h6>
                            <h6 className="text-sm text-slate-400 mt-1">(2020 to Present..)</h6>
                        </div>

                        <img src="/images/framework/Vue-JS-01.png" className="animate-[spin_20s_linear_infinite] absolute h-11 w-11 top-16 ltr:md:-left-5 ltr:left-32 rtl:md:-right-5 rtl:right-32" alt=""/>
                        <img src="/images/framework/Angular-04.png" className="animate-[spin_20s_linear_infinite] absolute h-11 w-11 -top-20 ltr:md:-right-5 ltr:right-32 rtl:md:-left-5 rtl:left-32" alt=""/>
                    </div>
                    
                    <div className="relative animate-[spin_30s_linear_infinite] -z-1">
                        <span className="after:absolute ltr:after:left-0 rtl:after:right-0 after:bottom-1/2 after:translate-y-1/2 after:h-2 after:w-8 after:rounded-md after:bg-amber-500/20 relative after:z-10"></span>
                        <span className="after:absolute ltr:after:left-0 rtl:after:right-0 after:bottom-1/2 after:translate-y-1/2 after:rotate-90 after:h-2 after:w-8 after:rounded-md after:bg-amber-500/20 relative after:z-10"></span>
                    </div>
                </div>
                
            </div>
            <div className="absolute inset-0 bg-gradient-to-b lg:from-amber-500/5 lg:to-amber-500/30 from-amber-500/5 to-amber-500/50 lg:-z-2"></div>
        </section>
        <div className="relative">
            <div className="absolute block w-full h-auto bottom-[25px] z-1 left-0">
                <Link to="#about"><i className="mdi mdi-arrow-down absolute top-0 left-0 right-0 text-center inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 h-12 w-12 mx-auto shadow-md dark:shadow-gray-800"></i></Link>
            </div>
        </div>
        </>
    )
}