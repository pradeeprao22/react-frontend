import React, { createContext, useReducer, useContext } from "react"
// import { usersReducer } from "../reducers/allUsersReducer";

const CurrentUserContext = createContext();

function CurrentUserProvider({ children, reducer, initialState }) {
    return (
        <CurrentUserContext.Provider value={useReducer(reducer, initialState)}>
            { children }
        </CurrentUserContext.Provider>
    );
}

const useStateValue = () => useContext(CurrentUserContext);
export { CurrentUserContext, CurrentUserProvider, useStateValue }; 