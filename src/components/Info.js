import React, { useState } from "react";
import EDMPhoto from "../images/emanuele-del-monte.jpg";
import './info.css'
import {imagefrombuffer} from 'imagefrombuffer'
export default function Info(props) {

  const { fullName, position, company, selectedFile } = props

  function _arrayBufferToBase64( buffer ) {
    var binary = '';
    var bytes = new Uint8Array( buffer );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
    }
    return window.btoa( binary );
  }

  return (
    <div className="info">
      <div className="imgContainer">
        {selectedFile ? (
          <img className="img" src={`data:${selectedFile.contentType};base64,${
            typeof window !== "undefined" &&
            _arrayBufferToBase64(selectedFile.data.data)
            
          }`} alt="Preview" />
        ) : (
          <img className="img" src={EDMPhoto} alt="Default" />
        )}
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
      <div>

        {/* <button onClick={handleUpload}>Upload</button> */}
        {/* You can also display a preview of the selected image */}

      </div>
      {/* <div className="info--buttons">
        <address>
          <a href="#">
            {" "}
            <button className="button button--email">
              <FontAwesomeIcon icon={faEnvelope} className="info--icon" />
              Email
            </button>
          </a>
        </address>
        <a
          href="https://www.linkedin.com/in/piyush-shakya/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button button--linkedin">
            <FontAwesomeIcon icon={faLinkedin} className="info--icon" />
            LinkedIn
          </button>
        </a>
      </div> */}
    </div>
  );
}
