import React from 'react'
import { IDelimiter } from '../shared/IElement'

interface IProps {
    readonly element: IDelimiter; 
}

export default function Delimiter(props: IProps): JSX.Element {

  return (
    <p className="text-center">**************</p>
  )
}
