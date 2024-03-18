import React from 'react'
import axios from "axios";

export const callApi = () => {
    const jwtToken = localStorage.getItem("token")
    if (!jwtToken) throw new Error("User not logged in!")

    return axios({
        ...requestConfig,
        baseUrl: "",
        headers:{
            BearerToken: jwtToken,

        },
            
    });
}
