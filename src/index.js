import React from "react";
import reactDom from "react-dom";

function BookList() {
    return (
        <section>
            <Image/>
            <Title/>
            <Title/>
            <Author/>
        </section>
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
        <img src="https://images-na.ssl-images-amazon.com/images/I/51TRfhQqHaL._SX327_BO1,204,203,200_.jpg" alt="" />
    );
};

reactDom.render(<BookList/>, document.getElementById('root'));