import React from 'react';
import ReactDOM from 'react-dom/client';

import { HeaderElement } from './Header.jsx';
import { FooterElement } from './Footer.jsx';

const myNumArray = [1,2,3,4,5]
const myFunction = (name) => {
    console.log("Hi, my name is "+name);    
}

// Capitalize the first letter of every word!!
export function App(props) {
    console.log("props",props);
    return (
        <>
            <HeaderElement myNumArray={myNumArray} myFuncion={myFunction}/>
            <FooterElement />
        </>
    )
}