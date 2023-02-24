import React, { createContext, useReducer, useContext } from "react"
import React, { usersReducer } from "../reducers/allUsersReducer";

const CurrentUserContext = createContext();

function CurrentUserProvider({ children, reducer, initialState }) {
    return (
        <CurrentUserContext.Provider value={usersReducer(reducer, initialState)}>
            { children }
        </CurrentUserContext.Provider>
    );
}

const useStateValue = () => useContext(CurrentUserContext);
export { CurrentUserContext, CurrentUserProvider, useStateValue }; 