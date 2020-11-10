import React from 'react'
import { IEmbed } from '../shared/IElement'

interface IProps {
    readonly element: IEmbed; 
}

export default function Embed(props: IProps): JSX.Element {

  const element = props.element;

  switch (element.data.service) {
    case 'youtube':
      
      return (
        <div className="youtube-video">
          <iframe width={element.data.width} height={element.data.height} src={element.data.embed} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title={element.data.caption}></iframe>
        </div>
      )
  
    default:
      return <p>Service not supported yet!</p>
  }
  
}