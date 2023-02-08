import React from "react";
import api from "../services/railsApi"
import { IState as IProps } from "../App"

const List: React.FC<IProps> = ({ people }) => {

  const renderList = (): JSX.Element[] => {
    return people.map((person) => (
        <li>
          <div>
            <h2> { person.name } </h2>
          </div>
          <p>{ person.age } years old</p>
          <p> { person.note }</p>
        </li>
    ))
  }
  return (     
            <ul>
               { renderList() }
            </ul>
         )
}

export default List;