import React from 'react';
import baseURL from "../../Constant/env";


export default class Token extends React.Component{
    constructor(props){
        super(props)
    }
    getLocalStorage =()=>{
        let tokenWaitress = 445566;
        localStorage.setItem("token", tokenWaitress)
    var tokenGuardado = localStorage.getItem("token")
    console.log(tokenGuardado)
       
    }
        
}