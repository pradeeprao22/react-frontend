import React from "react";
import { useStateValue } from "../context/CurrentUserContext";

export default function Dashboard() {
    const [{currentUser}] = useStateValue();

    return(
        <div className="container">
            <h1>Account Details</h1>
            {
                (() => {
                    if(currentUser) {
                            return (
                               <div>
                                <p>ID: {currentUser?.id}</p>
                                <p>Email: {currentUser?.email}</p>  
                                <p>Name: {currentUser?.name}</p>  
                               </div>
                               )
                        } else {
                            return (
                            <p>Error</p>
                            )
                        }
                })()  
            }
        </div>
    );
}