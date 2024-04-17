import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faFacebook, faTwitter, faInstagram, faLinkedin, faViber, faSkype } from "@fortawesome/free-brands-svg-icons";
import './socialDetails.css'
export default function SocialDetails(props) {
  const { socialTitle, socialDesc, socialLinks } = props

  const socialIconMapping = {
    Facebook: faFacebook,
    Twitter: faTwitter,
    Instagram: faInstagram,
    Skype: faSkype,
    Viber: faViber,
    LinkedIn: faLinkedin
  };



  return (
    <div>
      <div className="about">
        <h3 className="about--title">{socialTitle}</h3>
        <p className="about--paragraph">
          {socialDesc}
        </p>
      </div>
      <div className="socialDetails">
        {
          socialLinks.map((link, index) => (
            <div key={index} className="socialDetailContainer">
              <div>
                {socialIconMapping[link.type] && (
                  <a href={link.url} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon style={{ fontSize: 50, color: '#918e9b' }} icon={socialIconMapping[link.type]} /></a>
                )}
              </div>
              <div className="facebookDetails">
                <h4>{link.title}</h4>
                <p>{link.subtitle}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
