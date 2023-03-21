import { useStateValue } from "../context/CurrentUserContext";

export default function Dashboard() {
    const currentUser = useStateValue();

    return(
        console.log(currentUser),
        <div className="container">
            <h1>Account Details</h1>
            {
                (() => {
                    if(currentUser) {
                            return (
                               <div>
                                <p>ID: {currentUser?.id}</p>
                                <p>Email: {currentUser?.email}</p>  
                               </div>                          )
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