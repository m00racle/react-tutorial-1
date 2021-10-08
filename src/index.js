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
                    <li>hello World</li>
                </ul>
            </div>
            <div>
                {/* put the Person here */}
                <Person />
                {/* now the message */}
                <Message />
            </div>
        </>
    )
    return greets
}

// const Greeting = () => {
//     return React.createElement('h1', {}, 'hello world!');
// };

const Message = () => {return (
    <p>this is john doe message from components defined below!!</p>
)}

// const Person = () => {return (
//     <h2>John Doe</h2>
// )}
const Person = () => <h2>John Doe</h2>

reactDom.render(<Greeting/>, document.getElementById('root'));