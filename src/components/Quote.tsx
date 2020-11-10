import React from 'react'
import { IQuote } from '../shared/IElement'

interface IProps {
    readonly element: IQuote; 
}

export default function Quote(props: IProps): JSX.Element {

  const element = props.element;

  return (
      <blockquote className="blockquote">
        {element.data.text}
        <span>{element.data.caption}</span>
      
      </blockquote>
    
  )
}