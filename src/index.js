import React from "react";
import reactDom from "react-dom";

// css
import './index.css';

function BookList() {
    return (
        <section className="booklist">
           <Book/>
           <Book/>
           <Book/>
           <Book/>
           <Book/>
        </section>
    );
};

const Book = () => {
    return (
        <article className="book">
            <Image/>
            <Title/>
            <Author/>
        </article>
    );
};

const Title = () => {
    return (
        <h1>Midnight in Washington: How We Almost Lost Our Democracy and Still Could </h1>
    );
};

const Author = () => { return (
    <h4 style={{color:'617d98', fontSize:'0.75rem', marginTop:'0.25rem'}}>Adam Schiff</h4>
);};

const Image = () =>{
    return (
        <img src="https://images-na.ssl-images-amazon.com/images/I/81GsPCydFPL._AC_UL200_SR200,200_.jpg" alt="Book" />
    );
};

reactDom.render(<BookList/>, document.getElementById('root'));