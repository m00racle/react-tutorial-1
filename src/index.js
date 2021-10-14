import React from "react";
import reactDom from "react-dom";

function BookList() {
    return (
        <section>
           <Book/>
           <Book/>
           <Book/>
        </section>
    );
};

const Book = () => {
    return (
        <article>
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
    <h3>Adam Schiff</h3>
);};

const Image = () =>{
    return (
        <img src="https://images-na.ssl-images-amazon.com/images/I/81GsPCydFPL._AC_UL200_SR200,200_.jpg" alt="Book" />
    );
};

reactDom.render(<BookList/>, document.getElementById('root'));