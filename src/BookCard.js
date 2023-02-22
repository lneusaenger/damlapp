import React from "react";
import {Col } from 'antd';

export default function BookCard(props){
    return(
    <Col span={6}>
        <img src={props.imglink} alt=""/>
        <h1 className="title">{props.title}</h1>
        <div className="card__details">
            <h3 className = "author">{props.author}</h3>
            <span className="genre">{props.genre}</span>
            <p className = "description">{props.description}</p>

        </div>
    </Col>
    );
}