import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getOneUser } from "../services/users";
import { 
    AllUsersDispatchContext,
    AllUsersStateContext,
  } from "../context/AllUsersContext"

export default function UserContainer() {
    const { allUsers, usersLoading } = useContext(AllUsersStateContext)
    const dispatchAllUsers = useContext(AllUsersDispatchContext)

    useEffect(()=> {
        const fetchUsers = async()=> {
          dispatchAllUsers({ type: "INIT"});
        };
        fetchUsers();
    }, [])
    return(
        <></>
    );

}