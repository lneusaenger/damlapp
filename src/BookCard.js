import React from "react";

export default function BookCard(props){
    return(
    <div className="card">
      <img src={props.imglink} alt=""/>
        <div className="card__details">
            <h1 className="title">{props.title}</h1>
            <span className="genre">{props.genre}</span>
            <p className = "description">{props.description}</p>
            <p className = "rating">I rated this book {props.rating} out of 10</p>
        </div>
    </div>
    );
}