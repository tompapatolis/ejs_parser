import React from 'react'
import { IParagraph } from '../shared/IElement'

interface IProps {
    readonly element: IParagraph; 
}

export default function Paragraph(props: IProps): JSX.Element {

  const element = props.element;

  return (
    <p>{element.data.text}</p>
  )
}
