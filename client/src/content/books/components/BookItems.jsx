import React from "react";

const BookItems = (props) => {
    return (
        <div className="bg-slate-800 rounded border p-3" >
            <h2> title : {props?.name}</h2>
            <h3>author : {props?.author}</h3>
            <h3>genre : {props?.genre}</h3>
            <h3>pages : {props?.pages}</h3>
        </div>
    )
};

export default BookItems;
