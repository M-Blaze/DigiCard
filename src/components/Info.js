import './info.css'
import React from "react";
import EDMPhoto from "../images/emanuele-del-monte.jpg";
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
      <p className="info--website info--websiteLink">{company}</p>
    </div>
  );
}
