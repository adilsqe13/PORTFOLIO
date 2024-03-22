import React, {useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import userContext from "../CONTEXT/context/userContext";

export default function AddBanner(){
    const { fetchApi, userData } = useContext(userContext);

    useEffect(()=>{
        fetchApi();
    },[]);

    return(
        <section className="py-20 w-full table relative bg-[url('../../assets/images/bg/bg2.jpg')] bg-no-repeat bg-center bg-cover">
            <div className="absolute inset-0 bg-slate-900/70"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center">
                    <h3 className="p-4 bold">I Am Available For Freelancer Projects.</h3>

                    <p className="p-3">{userData && userData.about.description}</p>
                
                    <div className="relative m-0">
                        <Link to="" className="btn btn-warning m-0 form-control p-1">Hire Me</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}