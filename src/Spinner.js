import React from "react";

//To avoid using "message || Loading..." in the children, we use defaultProps to use it as a default


const Spinner = ({message}) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{message}</div>
        </div>
    )
}

Spinner.defaultProps = {
    message : 'Loading...'
}

export default Spinner