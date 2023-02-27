import AllUsersProvider from "../context/AllUsersContext";
import { CurrentUserProvider } from "../context/CurrentUserContext";
import reducer, { initialState } from "../reducers/currentUserReducer";

export const appProviders = [
    <AllUsersProvider />,
    <CurrentUserProvider reducer={reducer} initialState={initialState} />,
];