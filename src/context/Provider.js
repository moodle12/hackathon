import { useEffect } from "react";
import Context from "./Context";

const Provider =({children})=>{
    return(
        <Context.Provider value={{token:"value"}}> {children}</Context.Provider>
    )
}
export default Provider