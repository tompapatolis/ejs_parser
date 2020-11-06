import React from 'react'
import { IHeader } from '../shared/IElement'

interface IProps {
    readonly element: IHeader; 
}

export default function Header(props: IProps): JSX.Element {

  const element = props.element;

    switch (element.data.level) {
        case 1:
            return <h1>{element.data.text}</h1>;
        case 2:
            return <h2>{element.data.text}</h2>;
        case 3:
            return <h3>{element.data.text}</h3>;
        case 4:
            return <h4>{element.data.text}</h4>;
        case 5:
            return <h5>{element.data.text}</h5>;
        case 6:
            return <h6>{element.data.text}</h6>;            
        default:
            return <p>{element.data.text}</p>;
    }

}
