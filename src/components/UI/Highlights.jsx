import React from 'react';

const Highlights = (props) => {
    return (
        <div className="highlight">
            <div className="highlight__img">
                {props.icon}
            </div>
            <h3 className="highlight__subtitle">{props.subTitle}</h3>
            <p className="highlight__para">
                {props.highlightPara}
            </p>
        </div>
    );
}

export default Highlights;
