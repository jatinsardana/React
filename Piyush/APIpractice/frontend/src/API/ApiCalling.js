const apiCalling = async() =>{
    const response = await fetch("https://randomuser.me/api", {
        method : "GET" ,
    });
    const data = await response.json();
    return data;
}

export default apiCalling;