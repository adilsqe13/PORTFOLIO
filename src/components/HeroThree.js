import React, {useContext} from "react";
import { Link } from "react-router-dom";
import userContext from "../CONTEXT/context/userContext";




export default function HeroThree(){ 
    const { userData } = useContext(userContext);

    return(
        <section className=' bg-transparent margin-top-100 py-5' id="home">
            <div className="absolute inset-0 bg-slate-900/40"></div>
            <div className="container">
                <div className="grid grid-cols-1 text-center mt-5 relative">
                    <img src={userData && userData.about.avatar.url} className="rounded-full h-28 w-28 mx-auto wow animate__animated animate__fadeInUp" data-wow-delay=".1s" alt=""/>
                    <h4 className=" text-light font-bold lg:text-[40px] text-3xl lg:leading-normal leading-normal bg-transparent border-0 my-4 wow animate__animated animate__fadeInUp" data-wow-delay=".3s">{userData && userData.about.name}</h4>
                    <p className="text-light p-6 rounded-md  mx-auto wow animate__animated animate__fadeInUp" data-wow-delay=".5s">{userData && userData.about.description}</p>

                    <div className="mt-4 wow animate__animated animate__fadeInUp m-0 p-0 rounded-md border-0" data-wow-delay=".7s">
                        <Link to="" className="btn rounded-md bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-black bold form-control m-0 p-0" type="submit">Hire me</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}