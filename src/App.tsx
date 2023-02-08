import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./components/List"
import AddToList from "./components/AddToList"

export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Pradeep Rao",
      age: 30,
      url: "https://example.com",
      note: "some notes"
    },
    {
      name: "Pradeep Rao",
      age: 30,
      url: "https://example.com",
      note: "some notes"
    }
  ])

  return (
    <div className="App">
      <h1>People Invited</h1>
      <List people= {people} />
      <AddToList people= {people} setPeople= {setPeople}/>
    </div>
  );
}

export default App;
