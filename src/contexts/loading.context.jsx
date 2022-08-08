import { Spin } from "antd";
import { createContext, useEffect, useState } from "react"

const DEFAULT_STATE = {
    isLoading: false,
}

const isLoadingStyles = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: '1',
    background: '#ffffffcc',
}

export const LoadingContext = createContext(DEFAULT_STATE);

export const LoadingContextProvider = (props) => {
    const [state, setState] = useState(DEFAULT_STATE)

    useEffect(()=>{
        const target = document.querySelector("body");
        if (state.isLoading){
            target.style.overflow = "hidden";
        }
        else{
            target.style.overflow = "auto";
        }
    },[state.isLoading])

    return (
        <LoadingContext.Provider value={[state, setState]}>
            {
                state.isLoading ? <div style={isLoadingStyles}><Spin /></div> : <></>
            }
            {props.children}
        </LoadingContext.Provider>
    )
}