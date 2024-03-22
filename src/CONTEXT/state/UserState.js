import React, { useState } from 'react';
import userContext from '../context/userContext';


export default function UserState(props) {
    const [ userData, setUserData] = useState('');

    const fetchApi = async() =>{
        const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
        const data = await response.json();
        setUserData(data.user);
    }
  
  return (
    <>
      <userContext.Provider value={{ fetchApi, userData}}>
        {props.children}
      </userContext.Provider>
    </>
  )
}
