import { getAllUsers } from "../services/users";

export const usersReducer = (state, action) => {
    return new Promise(async (resolve) => {
        const { type, payload } = action;

        switch (type) {
            case "INIT":
                try {
                  const allUsers = await getAllUsers();
                  resolve({ ...state, allUsers, usersAreLoading: false });
                } catch (error) {
                  return state;
                }
                return state;
            
            case "USER_CREATED":
                try {
                    reslove({ ...state, allUsers: [...state.allUsers, payload] });
                } catch (error) {
                    return state;
                }
                return state;
                
            default:
                return state;    
        }
  


    });
};