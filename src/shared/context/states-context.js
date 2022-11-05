import React, {createContext, useState} from "react";


export const StateContext = createContext()

export function StateProvider (props){
    const [states, setStates] = useState("")
    return (
        <StateContext.Provider value={[states, setStates]}>
            {props.children}
        </StateContext.Provider>
    )
}