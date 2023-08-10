import React from "react";
import EDMPhoto from "../images/emanuele-del-monte.jpg";
import './info.css';

export default function Info2(props) {
  const { fullName, position, company, selectedFile } = props;

  return (
    <div className="info">
      <div className="imgContainer">
        <img
          className="img"
          src={selectedFile ? URL.createObjectURL(selectedFile) : EDMPhoto}
          alt={selectedFile ? "Preview" : "Default"}
        />
      </div>
      <h1 className="info--fullname">{fullName}</h1>
      <h5 className="info--role">{position}</h5>
      <p className="info--website">
        <a
          className="info--websiteLink"
          href="https://www.emanueledelmonte.it"
          target="_blank"
          rel="noopener noreferrer"
        >
          {company}
        </a>
      </p>
    </div>
  );
}
