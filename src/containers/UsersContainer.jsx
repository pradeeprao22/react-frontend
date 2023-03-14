import { useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { getOneUser } from "../services/users";
import { 
    AllUsersDispatchContext,
    AllUsersStateContext,
} from "../context/AllUsersContext"

export default function UserContainer() {
    const { allUsers, usersLoading } = useContext(AllUsersStateContext)

}