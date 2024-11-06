import React from 'react'

const Userapi = async() =>{
    const response = await fetch("https://randomuser.me/api" , {
        method : "GET",
    });
    return await response.json();
}

export default Userapi
