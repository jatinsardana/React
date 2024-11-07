import React from "react";

const Api2 = async() =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts" , {
        method : "GET"
    })

    const data = await response.json();
    return data;
}

export default Api2