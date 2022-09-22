import React from 'react'

export default function Price(props) {
  return (
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
  )
}
