import React from 'react';

export default function ContactDetails(props) {
  const { contactDetails } = props;

  return (
    <div className="about">
      <h3 className="about--title">Contact Us</h3>
      <p className="about--paragraph">
        {contactDetails.map((contact, index) => {
          // Check if the key is not '_id' before rendering the contact details
          if (!contact._id) {
            return (
              <p style={{ color: 'white' }} key={index}>
                {/* Display the field name based on the selected option */}
                {Object.keys(contact).map((option) => (
                  <React.Fragment key={option}>
                    {Object.keys(contact[option]).map((key) => (
                      <span key={key}>{contact[option][key]} </span>
                    ))}
                  </React.Fragment>
                ))}
              </p>
            );
          } else {
            return null; // Don't render anything if the key is '_id'
          }
        })}
      </p>
    </div>
  );
}
