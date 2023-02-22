import React from "react";
import {Col } from 'antd';
import './BookCard.css';


export default function BookCard(props){
    return(
    <Col span={6} className = "bookCard">
        <img src={props.imglink} className = "cover" alt=""/>
        <h1 className="title">{props.title}</h1>
        <h3 className = "author">{props.author}</h3>
            <span className="genre">Genre: {props.genre}</span>
            <p className = "description"><b>{props.description}</b></p>
            <p className = "rating">I rated this book {props.rating} out of 10</p>
    </Col>
    );
}