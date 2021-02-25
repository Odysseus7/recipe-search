import React from 'react';
import './InfoText.scss';
import {Message} from 'semantic-ui-react';

const InfoText = ({error}) => {
    return (
        <div className="infotext">
            {error ? <Message color="red">{error}</Message> : <p>Find the available searchqueries on <a href="https://forkify-api.herokuapp.com/phrases.html" target="_blank" rel="noreferrer">the forkify api</a></p>}
            
        </div>
    )
}

export default InfoText;
