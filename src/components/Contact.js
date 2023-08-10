
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


function Contact(props) {
    const { contactDetails, setContactDetails} = props

    const handleChange = (index, field, key, value) => {
        setContactDetails((prevState) => {
            const updatedDetails = [...prevState];
            updatedDetails[index][field][key] = value;
            return updatedDetails;
        });
    };
   

    const handleRemoveOption = (index, option) => {
        setContactDetails((prevState) => {
            const updatedDetails = [...prevState];
            delete updatedDetails[index][option];

            // Check if the element is empty after removing the option
            const isEmptyElement = Object.keys(updatedDetails[index]).length === 0;

            // If the element is empty, remove it from the array
            if (isEmptyElement) {
                return updatedDetails.filter((_, i) => i !== index);
            }

            return updatedDetails;
        });
    };

    const handleAddOption = (option) => {
        if (option === 'Contact') {
            setContactDetails((prevState) => [
                ...prevState,
                {
                    Contact: { Label: 'Contact', Number: '' },
                },
            ]);
        } else if (option === 'Email') {
            setContactDetails((prevState) => [
                ...prevState,
                {
                    Email: { Label: 'Email', EmailAddress: '' },
                },
            ]);
        } else if (option === 'Address') {
            setContactDetails((prevState) => [
                ...prevState,
                {
                    Address: { Label: 'Address', City: '', Country: '', State: '', Zipcode: '' },
                },
            ]);
        }

    };

    return (
        <div className='socialLinksContainer'>
            
            {contactDetails.map((contact, index) => (
                <div key={index}>
                    {/* Display the field name based on the selected option */}
                    {Object.keys(contact).map((option) => (
                        <>
                            <h3 className='labelHeader'>{option}</h3>

                            <div className='socialMediaContainer' key={option}>
                                {Object.keys(contact[option]).map((key) => (
                                    <div key={key}>
                                        <div className="social-link">
                                            <label htmlFor={key}>{`${key}`}</label>
                                            <input
                                                className="socialMediaInput"
                                                type="text"
                                                value={contact[option][key]}
                                                onChange={(e) => handleChange(index, option, key, e.target.value)}
                                                placeholder={` ${key}`}
                                            />
                                        </div>

                                    </div>

                                ))}
                                <div onClick={() => handleRemoveOption(index, option)}  className='garbageCan'><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></div>
                                {/* <button onClick={() => handleRemoveOption(index, option)}>Remove {option}</button> */}
                            </div>
                        </>
                    ))}
                </div>
            ))}
            <div>
                <select className='optionDropDown' onChange={(e) => handleAddOption(e.target.value)}>
                    <option value="">Add an option</option>
                    <option value="Contact">Contact</option>
                    <option value="Email">Email</option>
                    <option value="Address">Address</option>
                </select>
            </div>
        </div>
    );
}

export default Contact;
