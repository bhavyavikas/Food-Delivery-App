import { useRouteError } from "react-router-dom";


const Error = () =>{
    const err = useRouteError();
    console.log(err)
    return(
        <div>
        <h1>⛔The Page you are trying to see has encountered an Error!!!⛔</h1>
        <h3>{err.status}:{err.statusText}</h3>
    </div>
    )
}

export default Error; 