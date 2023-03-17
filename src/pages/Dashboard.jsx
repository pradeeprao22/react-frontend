import { useStateValue } from "../context/CurrentUserContext";

export default function Dashboard() {
    const currentUser = useStateValue();

    return(
        console.log(currentUser),
        <div className="container">
            <h1>Dashboard</h1>
        </div>
    );
}