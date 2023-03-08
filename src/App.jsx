import { useMemo } from 'react';
import './App.css';
// import List from "./components/List"
// import AddToList from "./components/AddToList"
import AppRouter from "./Router/AppRouter";
import { useStateValue } from './context/CurrentUserContext';
import { verifyUser } from "./services/auth";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useNavigate, useLocation } from "react-router-dom";

function App() {
  const [, dispatch] = useStateValue();
  const { navigate }  = useNavigate();
  const { pathname } = useLocation();

  useMemo( 
    async () => {
      const userData = await verifyUser()
      dispatch({ type: "SET_USER", currentUser: userData });

      if (
        !userData &&
        !pathname.match(/^\/login$/i) &&
        !pathname.match(/^\/register$/i )
      ) {
        navigate("/login");
      }
    }
   , [ dispatch, navigate, pathname ]);

  return (
    <div className="App">
      <div>
      <AppRouter />
      </div>
    </div>
  );
}

export default App;
