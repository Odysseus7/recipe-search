import React from 'react'

const Loader = ({message}) => {
    return (
        <div>
            <div className="ui active dimmer">
                <div className="ui text loader">{message}</div>
            </div>
        </div>
    )
}

Loader.defaultProps = {
    message: "Loading.."
}

export default Loader;
