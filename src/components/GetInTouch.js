import React, { useContext } from "react";
import * as Unicons from '@iconscout/react-unicons'
import { Link } from "react-router-dom";
import userContext from "../CONTEXT/context/userContext";


export default function GetInTouch() {
    const { userData } = useContext(userContext);

    return (
        <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="contact">
            <div className="container">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">Get In Touch</h3>

                    <p className="text-slate-400 mx-auto text-[15px]">{userData?.about?.description?? ""}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 mt-8 items-center gap-[30px]">
                    <div className="lg:col-span-8">
                        <div className="p-6 rounded-md shadow bg-white dark:bg-slate-900">
                            <form>
                                <div className="grid lg:grid-cols-12 lg:gap-5">
                                    <div className="lg:col-span-6 mb-5">
                                        <input name="name" id="name" type="text" className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]" placeholder="Name :" />
                                    </div>

                                    <div className="lg:col-span-6 mb-5">
                                        <input name="email" id="email" type="email" className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]" placeholder="Email :" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1">
                                    <div className="mb-5">
                                        <input name="subject" id="subject" className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]" placeholder="Subject :" />
                                    </div>

                                    <div className="mb-5">
                                        <textarea name="comments" id="comments" className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-28 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]" placeholder="Message :"></textarea>
                                    </div>
                                </div>
                                <button type="submit" id="submit" name="send" className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white rounded-md h-11 justify-center flex items-center">Send Message</button>
                            </form>
                        </div>
                    </div>

                    <div className="lg:col-span-4">
                        <div className="lg:ms-8">
                            <div className="flex">
                                <div className="icons text-center mx-auto">
                                    <Unicons.UilPhone className=" block rounded text-2xl dark:text-white mb-0" />
                                </div>

                                <div className="flex-1 ms-6">
                                    <h5 className="text-[17px] dark:text-white mb-2 font-medium">Phone</h5>
                                    <Link to="tel:+152534-468-854" className="text-slate-400 text-[15px]">{userData?.about?.phoneNumber?? ""}</Link>
                                </div>
                            </div>

                            <div className="flex mt-4">
                                <div className="icons text-center mx-auto">
                                    <Unicons.UilEnvelope className=" block rounded text-2xl dark:text-white mb-0" />
                                </div>

                                <div className="flex-1 ms-6">
                                    <h5 className="text-[17px] dark:text-white mb-2 font-medium">Email</h5>
                                    <Link to="mailto:contact@example.com" className="text-slate-400 text-[15px]">{userData?.email?? ""}</Link>
                                </div>
                            </div>

                            <div className="flex mt-4">
                                <div className="icons text-center mx-auto">
                                    <Unicons.UilMapMarker className=" block rounded text-2xl dark:text-white mb-0" />
                                </div>

                                <div className="flex-1 ms-6">
                                    <h5 className="text-[17px] dark:text-white mb-2 font-medium">Location</h5>
                                    <p className="text-slate-400 text-[15px] mb-2">{userData?.about?.address?? ""}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container margin-top-100">
                    <h1 className="md:text-2xl text-xl md:leading-normal leading-normal font-semibold bold fs-2 dfjcac">Follow me on</h1>
                    <div className="row py-3">
                        <div className="col-3">
                            <div className="flex mt-4 list-style-type-none">
                                <div className="icons text-center mx-auto">
                                    <img src={userData && userData.social_handles[0].image.url} height={40} width={40} alt="icon" />
                                </div>

                                <div className="flex-1 ms-6">
                                    <h5 className="text-[17px] dark:text-white mb-2 font-medium">{userData && userData.social_handles[0].platform}</h5>
                                    <Link to="mailto:contact@example.com" className="text-slate-400 text-[15px]">Follow</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                        <div className="flex mt-4 list-style-type-none">
                                <div className="icons text-center mx-auto">
                                    <img src={userData && userData.social_handles[1].image.url} height={40} width={40} alt="icon" />
                                </div>

                                <div className="flex-1 ms-6">
                                    <h5 className="text-[17px] dark:text-white mb-2 font-medium">{userData && userData.social_handles[1].platform}</h5>
                                    <Link to="mailto:contact@example.com" className="text-slate-400 text-[15px]">Follow</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                        <div className="flex mt-4 list-style-type-none">
                                <div className="icons text-center mx-auto">
                                    <img src={userData && userData.social_handles[2].image.url} height={40} width={40} alt="icon" />
                                </div>

                                <div className="flex-1 ms-6">
                                    <h5 className="text-[17px] dark:text-white mb-2 font-medium">{userData && userData.social_handles[2].platform}</h5>
                                    <Link to="mailto:contact@example.com" className="text-slate-400 text-[15px]">Follow</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                        <div className="flex mt-4 list-style-type-none">
                                <div className="icons text-center mx-auto">
                                    <img src={userData && userData.social_handles[3].image.url} height={40} width={40} alt="icon" />
                                </div>

                                <div className="flex-1 ms-6">
                                    <h5 className="text-[17px] dark:text-white mb-2 font-medium">{userData && userData.social_handles[3].platform}</h5>
                                    <Link to="mailto:contact@example.com" className="text-slate-400 text-[15px]">Follow</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}