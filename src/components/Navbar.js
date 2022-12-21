import React from "react";
import { Link } from "react-router-dom";

function Nabvar(){

    return(
        <>
        <li><Link to={'Contact'}>Contact</Link></li>
        <li><Link to={'Content'}>Content</Link></li>
        <li><Link to={'Hero'}>Hero</Link></li>
        <li><Link to={'Footer'}>Footer</Link></li>
        </>
    )

}

export default Nabvar