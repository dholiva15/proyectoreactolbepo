import React, { createContext} from "react"


export const context = createContext([{title:"uno"}, {title:"dos"}])

const CustomProvider = ({ children }) =>{
    return<> {children} </>
}


export default CustomProvider