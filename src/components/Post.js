import React, { useState, useEffect } from "react";

const Post = (props) => {
  return (
    <div className="post">
      {props.posts.map((element, index) => {
        return (
          <>
            <h3 key={index}>{element.title}</h3>
            <p>{element.body}</p>
          </>
        );
      })}
    </div>
  );
};

export { Post };
