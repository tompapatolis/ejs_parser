import React from 'react'
import { ITable } from '../shared/IElement'

interface IProps {
    readonly element: ITable; 
}

export default function Table(props: IProps): JSX.Element {

  const element = props.element;

  return (
    <>
    <table>
        {element.data.content.map((item, index) =>
            <tr>
              {item.map( ( cell )=> {
                return <td>{cell}</td>
              })}
          </tr>
        )}
    </table>
    </>
    
  )
}