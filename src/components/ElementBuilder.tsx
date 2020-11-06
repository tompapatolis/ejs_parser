import React from 'react'
import { Element } from '../shared/IElement';
import Header from './Header';
import Paragraph from './Paragraph';
import List from './List';
import Delimiter from './Delimiter';
import Image from './Image';

interface IProps {
    readonly element: Element;
}

export default function ElementBuilder(props: IProps): JSX.Element {
    const element = props.element;

    switch (element.type) {
      case "paragraph":
        return <Paragraph element={element}/>
      case "header":
        return <Header element={element}/>   
      case "delimiter":
        return <Delimiter element={element}/>
      case "image":
        return <Image element={element}/>
      case "list":
        return <List element={element}/>

      default:
      return <div className="alert alert-warning" role="alert">
                Unknown Element!
            </div>

    }

}
