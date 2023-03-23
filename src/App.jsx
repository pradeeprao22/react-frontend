import { useMemo } from 'react';

import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import './App.css';
// import List from "./components/List"
// import AddToList from "./components/AddToList"
import AppRouter from "./Router/AppRouter";
import Footer from "./layouts/Footer"
import { useStateValue } from './context/CurrentUserContext';
import { verifyUser } from "./services/auth";


// import { useNavigate } from "react-router";

function App() {
  // const { push } = (location: History.LocationDescriptor<unknown>, state?: unknown) => void
  const [, dispatch] = useStateValue();
  const push = useNavigate();
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
        push("/");
      }
    }
   , [ dispatch, push, pathname ]);

  return (
    <div className="App">
      <div className="container">
        <AppRouter />
        <Footer />
      </div>
    </div>
  );
}

export default App;
