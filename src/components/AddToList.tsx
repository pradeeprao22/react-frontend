import { useState } from "react";
import React from "react";
import { IState as Props } from "../App"

interface IProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps> = ({people, setPeople}) => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        note: "",
        img: ""
    })

    const handelChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handelSubmit = () => {

        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.img,
                note: input.note
            }
        ])

    }
    
    return (
        <div>
            <input
             type="text"
             placeholder="name"
             name="name"
             value={input.name}
             onChange={handelChange}
            /><br></br>

            <input
             type="text"
             placeholder="age"
             name="age"
             value={input.age}
             onChange={handelChange}
            /><br></br>

            <textarea
             placeholder="note"
             name="note"
             value={input.note}
             onChange={handelChange}
            /><br></br>

            <input
             type="text"
             placeholder="img"
             name="img"
             value={input.img}
             onChange={handelChange}
            />

            <button
              onClick={handelSubmit}
            >
                Add To List
            </button>
        </div>
    )
}

export default AddToList;