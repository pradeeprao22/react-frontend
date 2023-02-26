import { useState } from "react"

export default function useAsyncReducer(reducer, initState) {
    const[state, setState] = useState(initState),
    dispatch = async (action) => setState(await reducer(state, action));
    return [state, dispatch];
}