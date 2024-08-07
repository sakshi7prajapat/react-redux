import React from "react"
import "./userDetails.css"
import { fakeUSerData } from "../api";
import { useDispatch } from "react-redux";
import { addUser } from "../store/silces/UserSlices";
import { DisplayUser } from "./DisplayUser";

const UserDeatails=()=>{

const dispatch = useDispatch();    
const addNewUser=(payloads)=>{
  console.log(payloads);
 dispatch(addUser(payloads))
}

  return (
    <>
        <div className="content">
            <div className="admin-table">
                    <div className="admin-subtitle">
                        <text>List of User</text>
                        <button className="add-btn" onClick={()=>{
                            addNewUser(fakeUSerData())
                            
                        }}>Add New User</button>
                    </div>
                    <ul>
                        <DisplayUser/>
                    </ul>
                    <hr/>
                    {/* deleteuser */}
            </div>

        </div>
    </>
  );
}

export default UserDeatails