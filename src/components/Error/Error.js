import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    const { status, statusText } = err;
    return (
        <div className="route-error">
            <h1>Oops !!</h1>
            <h2>Somthing went wrong !!</h2>
            <h3>{status +" "+statusText }</h3>
        </div>
    )
};

export default Error;