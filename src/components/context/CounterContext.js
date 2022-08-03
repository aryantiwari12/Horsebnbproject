import { useState,createContext } from "react";
import axios from "axios";
export  const CounterContext=createContext()

function CounterContextprovider(props){

  const [profiledata,setprofiledata]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    deviceId: "string",
    protectedData:{
        phoneNumber:""
    },
    publicData:{
        country_code:""
    }
    
  })

  const changesdata=(e)=>{
    
    let name=e.target.name;
    let value=e.target.value;
    setprofiledata({
        ...profiledata,
        [name]:value
    })
    
  }
  

  let item;

  const Signupdata=async()=>{
    const data={
        firstName:profiledata.firstName,
        lastName:profiledata.lastName,
        email:profiledata.email,
        password:profiledata.password,
        deviceId:0,
        protectedData:{
            phoneNumber:"9336301466",
        },
        publicData:{
            country_code:"+91"
        }
    }
    let res=await axios.post("https://horsebnb.com:3001/v1/api/current_user/create",data,{
        
    }).then((res)=>{
        console.log(res.data);
        item=res.data.token;
        localStorage.setItem("token",res.data.token)
    })
    console.log(res)
  }

  const value={Signupdata,changesdata}
   







    return (
          <CounterContext.Provider value={value}>
            {props.children}
          </CounterContext.Provider>
    )
}
export default CounterContextprovider;