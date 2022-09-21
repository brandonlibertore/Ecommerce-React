
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Book = (props) => {
    return (
        <div className="book">
            <a href="/">
                <figure className="book__img--wrapper">
                    <img src={props.url} alt="" className="book__img" />
                </figure>
            </a>
            <div className="book__title">
                <a href="/" className="book__title--link">
                    {props.title}
                </a>
            </div>
            <div className="book__ratings">
                {
                    new Array(Math.floor(props.rating)).fill(0).map((_, index) => <FontAwesomeIcon icon="star" key={index}/>)
                }
                {
                    Number.isInteger(props.rating) ? "" : <FontAwesomeIcon icon="star-half-alt"/>
                }
            </div>
            <div className="book__price">
                {
                    props.salePrice ?
                    <>  
                        <span className="book__price--normal">
                            ${props.originalPrice.toFixed(2)}
                        </span>
                        ${props.salePrice.toFixed(2)} 
                    </>
                    : 
                    <>
                        ${props.originalPrice.toFixed(2)}
                    </>
                }

            </div>
        </div>
    );
}

export default Book;
