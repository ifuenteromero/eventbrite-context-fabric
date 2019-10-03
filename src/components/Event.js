import React from 'react';

const Event = ({id,logo,name,url}) => {
    return ( 
        <div>
            <div className="uk-card uk-card-default ">
                <div className="uk-card-media-top">
                {logo&&<img src={logo.url} alt={name.text}/>}
            </div>
            <div className="uk-card-body">
                <h3 className="uk-card-title">
                    {name.text}
                </h3>
            </div>
            <div className="uk-card-footer">
                <a href={url} className="uk-button uk-button-secondary">
                    Más información
                </a>
            </div>
        </div>
        </div>
    );
}
 
export default Event;