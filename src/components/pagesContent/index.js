import React, { Fragment } from 'react';


export default function PagesContent(props) {
  return (
    <Fragment>
      <h1 className="title-top">
        <span className="tag-content tag-content-item">&#60;h1&#62;</span>
        <span className="description-center">{props.name}</span>
        <span className="tag-content tag-content-item">&#60;/h1&#62;</span>
      </h1>
      <p className="description-text-top">
        <span className="tag-content tag-content-item">&#60;p&#62;</span>
        <span>{props.description}</span>
        <span className="tag-content tag-content-item">&#60;p&#62;</span>
      </p>
    </Fragment>
  );
}