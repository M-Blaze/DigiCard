import React from "react";

export default function About(props) {

  const {about,description}=props

  return (
    <div className="interests">
      <h3 className="interests--title">{about}</h3>
      <p className="interests--paragraph">
        {description}
      </p>
    </div>
  );
}
