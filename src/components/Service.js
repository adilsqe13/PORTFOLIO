import React, {useContext} from "react";
import { Link } from "react-router-dom";
import * as Unicons from "@iconscout/react-unicons";
import userContext from "../CONTEXT/context/userContext";

export default function Services(){
    const { userData } = useContext(userContext);
  
    return(
        <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="service">
        <div className="container">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">What do I offer</h3>

                <p className="text-slate-400 mx-auto text-[15px]">{userData && userData.about.description}</p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
               {userData && userData.services.map((item,index)=>{
                const Icon = item.image.url;
                return(
                    <div className="px-6 py-10 shadow shadow-gray-200 hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900" key={index}>
                    <img src={Icon} height={50} width={50} alt="icon" />

                    <div className="content mt-7">
                        <Link to="" className="title h5 text-[17px] font-medium hover:text-amber-500">{item.name}</Link>
                        <p className="mt-2 bold text-green text-[15px]">{item.charge}</p>
                        <p className="text-slate-400 mt-3 text-[15px]">{item.desc}</p>
                        
                        <div className="mt-5">
                            <Link href="" className="hover:text-amber-500 dark:hover:text-amber-500 after:bg-amber-500 dark:text-white transition duration-500 inline-flex items-center gap-1">Read More <Unicons.UilArrowRight width={16}/></Link>
                        </div>
                    </div>
                </div> 
                )
               })}
                 
            </div>
        </div>
    </section>
    )
}