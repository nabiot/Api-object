import React from 'react';
import './PostComponent.css';

function PostComponent(props) {
  
  return (
    <div className="posts">
    <h3>UserId: {props.UserId} </h3>
    <h3>Id : {props.Id} </h3>
    <h3>Title: {props.Title} </h3>
    <h3>Body: {props.Body} </h3>
    </div>
  );
}

export default PostComponent;