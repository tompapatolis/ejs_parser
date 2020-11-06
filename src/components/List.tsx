import React from 'react'
import { IList } from '../shared/IElement'

interface IProps {
    readonly element: IList; 
}

export default function List(props: IProps): JSX.Element {

    const element = props.element;

    switch (element.data.style) {
        case "ordered":
            return <ol>
                {element.data.items.map((item, index) =>
                 <li>{item}</li>
                )}
                </ol>;
        case "unordered":
            return <ul>
                {element.data.items.map((item, index) =>
                 <li>{item}</li>
                )}
                </ul>; 
        default:
            return <ol></ol>;
    }
}
