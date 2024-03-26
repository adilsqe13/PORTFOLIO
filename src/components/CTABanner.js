import React, {useContext} from "react";
import { Link } from "react-router-dom";
import userContext from "../CONTEXT/context/userContext";

export default function AddBanner(){
    const { userData } = useContext(userContext);

    return(
        <section className=' bg-transparent  py-5'>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center">
                    <h1 className=" md:text-2xl text-xl md:leading-normal leading-normal font-semibold">I Am Available For Freelancer Projects</h1>

                    <p className="py-3">{userData?.about?.description?? ""}</p>
                
                    <div className="relative m-0">
                        <Link to="" className="btn btn-warning m-0 form-control p-1">Hire Me</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}