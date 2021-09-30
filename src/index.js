import React from "react";
import reactDom from "react-dom";

// function that will make React knows this is special
// first letter capitalized means this is a component
// this is stateless functional component
// always return JSX

function Greeting() {
    var greets = (
        <>
            <div className='greets'>
                <h1>Hello there world</h1>
                <ul>
                    <li>hello list</li>
                </ul>
            </div>
            <div>
                <p>second div trial on paragraph and make the greets var rather than const</p>
            </div>
        </>
    )
    return greets
}

// const Greeting = () => {
//     return React.createElement('h1', {}, 'hello world!');
// };



reactDom.render(<Greeting/>, document.getElementById('root'));