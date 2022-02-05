import React from "react";
import reactDom from "react-dom";

// css
import './index.css';

// setup
const firstBook = {
    img: "https://images-na.ssl-images-amazon.com/images/I/81GsPCydFPL._AC_UL200_SR200,200_.jpg",
    title: "Midnight in Washington: How We Almost Lost Our Democracy and Still Could",
    author: "Adam Schiff"
}

const secondBook = {
    img: "https://images-na.ssl-images-amazon.com/images/I/71rdsaOMvVL._UX300__PJku-headphones-v1,TopRight,0,-50_AC_UL254_SR254,254_.jpg",
    title: "Reminders of Him: A Novel",
    author: "Colleen Hoover"
}

function BookList() {
    return (
        <section className="booklist">
           <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
           <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
        </section>
    );
};

const Book = (props) => {
    
    return (
        <article className="book">
            <img src= {props.img} alt=""/>
            <h1>{props.title}</h1>
            <h4>{props.author}</h4>
        </article>
    );
};

reactDom.render(<BookList/>, document.getElementById('root'));