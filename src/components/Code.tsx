import React from 'react';
import { ICode } from '../shared/IElement';

interface IProps {
    readonly element: ICode; 
}

export default function Code(props: IProps): JSX.Element {

  const element = props.element;

  return (
    <>
    <pre><code>{element.data.code}</code></pre>
    </>
    
  )
}