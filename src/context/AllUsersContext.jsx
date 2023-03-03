import React, { createContext, useMemo, useRef } from "react";
import { usersReducer } from "../reducers/allUsersReducer";
import useAsyncReducer from "../hooks/useAsyncReducer"
export const AllUsersStateContext = createContext();
export const AllUsersDispatchContext = createContext();

export default function AllUsersProvider({ childern }){
   
    const initialUserState = {
        allUsers: [],
        usersAreLoading: true
    };

    const [state, dispatchAllUsers] = useAsyncReducer(
        usersReducer,
        initialUserState
    );

    const dispatch = useRef(dispatchAllUsers);

    useMemo(async () => {
        dispatch.current({
            type: "INIT",
        });
    }, []);

    return (
        <AllUsersStateContext.Provider value={state}>
            <AllUsersDispatchContext value={dispatchAllUsers}>
                { childern }
            </AllUsersDispatchContext>
        </AllUsersStateContext.Provider>
    );
}

