import React, { useMemo, useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import List from "./components/List"
// import AddToList from "./components/AddToList"
import AppRouter from "./Router/AppRouter"
import { useStateValue } from './context/CurrentUserContext';
import { verifyUser } from "./services/auth"

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useNavigate, useLocation } from "react-router-dom"

// export interface IState {
//   people: {
//     name: string
//     age: number
//     url: string
//     note?: string
//   }[]
// }

function App() {
  const [, dispatch] = useStateValue();
  const navigate  = useNavigate();
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

  // const [people, setPeople] = useState<IState["people"]>([
  //   {
  //     name: "Pradeep Rao",
  //     age: 30,
  //     url: "https://example.com",
  //     note: "some notes"
  //   },
  //   {
  //     name: "Pradeep Rao",
  //     age: 30,
  //     url: "https://example.com",
  //     note: "some notes"
  //   }
  // ])

  return (
    <div className="App">
      <AppRouter />
      {/* <h1>People Invited</h1>
      <List people= {people} />
      <AddToList people= {people} setPeople= {setPeople}/> */}
    </div>
  );
}

export default App;
