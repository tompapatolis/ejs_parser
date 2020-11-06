import React from 'react'
import { IImage } from '../shared/IElement'

interface IProps {
    readonly element: IImage; 
}

export default function Image(props: IProps): JSX.Element {

  const element = props.element;

  return (
    <img src={element.data.file.url} alt={element.data.caption}/>
    
  )
}
