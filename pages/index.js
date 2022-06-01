import React, { useEffect } from "react";

import Presentation from "../Views/Root/Presentation";

function Index() {

    useEffect(() => {
        if(JSON.parse(localStorage.getItem("user_info"))) return window.location.replace("/home")
    }, [])

    return (
        <Presentation />
    );
}

export default Index;