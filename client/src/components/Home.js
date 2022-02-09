import React, { useEffect } from "react";
import { isUserLoggedIn } from "../utils/AuthenticateUser";

function Home() {
    useEffect(()=>{
        initializeHome();
    }, []);

    function initializeHome() {
        console.log(isUserLoggedIn());
    }

    return <>
        <h1>This is home page</h1>

    </>
}

export default Home;