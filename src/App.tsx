import React from 'react';
import {elements} from './shared/elements'
import ElementBuilder from './components/ElementBuilder'

/**
 * App JSX
 */

function App() {

    return (
        <>
        <header>
            <img className="app-logo" src="parser.jpg" alt="Logo"/>
        </header>
        <div className="container pt-2 pb-2">          
            <div className="page">
                {elements.map((element, index) =>
                    <ElementBuilder key={index} element={element}/>
                )}
            </div>         

        </div>
        </>

    )
}

export default App;
