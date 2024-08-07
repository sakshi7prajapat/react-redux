import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeUser } from "../store/silces/UserSlices";
export const DisplayUser = () =>{
    
   const dispatch = useDispatch(); 
    
   const data = useSelector((state)=>{
    return state.users;
   });
   console.log(data)

   const delteUser = (id) =>{
        dispatch(removeUser(id))
   }
    return(
        <>
        {
            data.map((item,id)=>{
                return (
                    <div key={id}>
                <li style={{display: "flex" , justifyContent: 'space-between', width: "100%"}}>
                    {item}
                    <button onClick={()=>{
                        delteUser(id);
                    }}>delete</button>
                </li></div>
                )
            })
        }
        </>
    );

}